import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { environment } from '@env/environment';
import { env } from '@env/.env';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string = environment.APPName;
  userName: string = jwt_decode(sessionStorage.getItem('adal.idtoken')).name;
  constructor(private adalSvc: MsAdalAngular6Service) {}

  ngOnInit() {}

  logout() {
    this.adalSvc.logout();
  }
}
