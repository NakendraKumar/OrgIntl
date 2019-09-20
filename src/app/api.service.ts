import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth_token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJlODY4MDE2MC0zYjI3LTRjNzgtOGMwZS02YTZhMWU2Y2EyYzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81Yjk3M2Y5OS03N2RmLTRiZWItYjI3ZC1hYTBjNzBiODQ4MmMvIiwiaWF0IjoxNTY4OTYyNzYyLCJuYmYiOjE1Njg5NjI3NjIsImV4cCI6MTU2ODk2NjY2MiwiYWlvIjoiNDJGZ1lDaUtEV2JlcEJpVHVmRExtM2VmRnZoYUFRQT0iLCJhcHBpZCI6Ijc5NDdiMTlkLTRkMDgtNGJiMy1iNWQ5LTUxZjViOTM3ZDUyZiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYy8iLCJvaWQiOiIwOTkyOGQ3YS01ZDZlLTRhMDgtOGQyZi1jYTZjMjkyNzE0MzYiLCJyb2xlcyI6WyJUcmFuc2ZlciJdLCJzdWIiOiIwOTkyOGQ3YS01ZDZlLTRhMDgtOGQyZi1jYTZjMjkyNzE0MzYiLCJ0aWQiOiI1Yjk3M2Y5OS03N2RmLTRiZWItYjI3ZC1hYTBjNzBiODQ4MmMiLCJ1dGkiOiJVZGM4WDNtbWRFQ2FjZGJRWENNeEFBIiwidmVyIjoiMS4wIn0.30rPHLwRx8snUUqbj48a8t1iulNT3tWSeg5HtuhxWJblLBqp3ANjvt4fbBBo8yU0Xq4N1B8ZaH0ewGB0CzYpVJFSXsoa5x5jzngiOZQEqy957EELlQMUvYMYnPDmmMiq95bs8bQiroaqCT2dG80TllyK_6BrnhVLqnEYQsysh7pHMIGXbm_TZlRa8BWlhr0UCtVtXPEYJYjTTpZBN6V_vgRbpKJqHD02Y0ujOyQbUMNr7K9EuGq823R1iX16c31z383JWdo2sQuPS1vnEmqsUAvYvFe1J8qsYwH3JHRLimgEbH3aSB5qkYLw7MFTEeyUYA4objSvDKb5QVxJkfA`;
  apiURL: string =
    'https://orgintel-dev-cd.sbp.eyclienthub.com/api/v1.0/orgkey?name=BP&country=UNITED STATES OF AMERICA';
  constructor(private httpClient: HttpClient) {}

  public getData() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Credential': 'true',
      // 'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('Authorization', 'Bearer ' + this.auth_token);
    return this.httpClient.get(this.apiURL, { headers: headers });
  }
}
// "start": "npm run env -s && ng serve --proxy-config proxy.conf.js",
