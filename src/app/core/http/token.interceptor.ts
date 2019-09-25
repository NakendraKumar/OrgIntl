import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private adalSvc: MsAdalAngular6Service,
    private router: Router // private toastr: ToastrService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.indexOf('http://localhost') >= 0) {
      return next.handle(request);
    }
    return this.addTokenSendRequest(request, next);
  }

  addTokenSendRequest(request: HttpRequest<any>, next: HttpHandler): any {
    let token = '';

    let TokenResource = '';
    console.log('this.adalSvc0', this.adalSvc);
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({
        url:
          environment.CoreApiDomain + environment.CoreApiPrefix + request.url,
        setHeaders: {
          'api-version': '2.0'
        }
      });
    }

    if (request.url.indexOf(environment.CoreApiDomain) >= 0) {
      token = this.adalSvc.getToken(environment.CoreApiDomain);
      TokenResource = environment.CoreApiDomain;
    } else {
      token = null;
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    console.log('token', token);
    console.log('TokenResource', TokenResource);
    console.log('this.adalSvc', this.adalSvc);
    return next.handle(request).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 401 && e.url && e.url.indexOf(TokenResource) >= 0) {
          return this.adalSvc.acquireToken(TokenResource).pipe(
            share(),
            catchError(err => {
              // if (environment.toast) {
              //   this.toastr.error(err.message, 'Request error');
              // }
              throw err;
            }),
            switchMap(a => {
              return this.addTokenSendRequest(request, next);
            })
          );
        } else {
          // if (environment.toast) {
          //   this.toastr.error(e.message, 'Request error');
          // }
          console.log('this.adalSv111c', this.adalSvc);
          if (!this.adalSvc.isAuthenticated) {
            this.router.navigate(['']);
          }
          throw e;
        }
      })
    );
  }
}
