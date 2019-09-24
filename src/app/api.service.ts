import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string =
    'https://orgintel-dev-cd.sbp.eyclienthub.com/api/v1.0/orgkey';
  constructor(private httpClient: HttpClient) {}

  public getData(companyName: any, country: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get(
      `${this.apiURL}?name=${companyName}&country=${country}`,
      { headers: headers }
    );
  }
}
