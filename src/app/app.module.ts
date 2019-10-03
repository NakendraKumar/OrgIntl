import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AuthenticationGuard,
  MsAdalAngular6Module
} from 'microsoft-adal-angular6';
import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    MsAdalAngular6Module.forRoot({
      tenant: environment.config.tenant,
      clientId: environment.config.clientId,
      redirectUri: window.location.origin,
      endpoints: environment.config.endpoints,
      navigateToLoginRequestUrl: false,
      expireOffsetSeconds: 300,
      cacheLocation: environment.config.cacheLocation,
      postLogoutRedirectUri: environment.postLogoutRedirectUri
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  exports: [MatFormFieldModule],
  declarations: [AppComponent],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
