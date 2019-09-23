import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth_token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJlODY4MDE2MC0zYjI3LTRjNzgtOGMwZS02YTZhMWU2Y2EyYzEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81Yjk3M2Y5OS03N2RmLTRiZWItYjI3ZC1hYTBjNzBiODQ4MmMvIiwiaWF0IjoxNTY4OTc1NDk2LCJuYmYiOjE1Njg5NzU0OTYsImV4cCI6MTU2ODk3OTM5NiwiYWlvIjoiNDJGZ1lIamZwL2p5WU4xQmlTYlg1SVFidHhsaUFBPT0iLCJhcHBpZCI6Ijc5NDdiMTlkLTRkMDgtNGJiMy1iNWQ5LTUxZjViOTM3ZDUyZiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYy8iLCJvaWQiOiIwOTkyOGQ3YS01ZDZlLTRhMDgtOGQyZi1jYTZjMjkyNzE0MzYiLCJyb2xlcyI6WyJUcmFuc2ZlciJdLCJzdWIiOiIwOTkyOGQ3YS01ZDZlLTRhMDgtOGQyZi1jYTZjMjkyNzE0MzYiLCJ0aWQiOiI1Yjk3M2Y5OS03N2RmLTRiZWItYjI3ZC1hYTBjNzBiODQ4MmMiLCJ1dGkiOiJjRHAzbzJEV05FT29pcjVWOHdGQUFBIiwidmVyIjoiMS4wIn0.l8_pGwMbmTer8RVFZRr2N7EvNKo9vi38z4qmqORByJw5bhH2RAcDtVFJbHG6mCxZRTw-TyAgoja5Ie9ZF7KiIMWaQr382_1lTwlYJLpMaMuMQJ2PdcpCpDC3BGu9-HIxLKGDrzvdXs0SbDAnSI7CZFjCEa5dLxkOq4QiRXA00gEc8afV4KOhPpxlyE8ZlvEvKGhCe80QKnWZ55s2QFrcN1-VG2_P8GEZlzJ8DhBUOiMdIlTHxh9CM3RkG1OZlHZTtOOdd2emww6-BVb-OtHB86QrV1Rx0cAt9i3hzhT_p8vR3NGPhbByxYsF-oBxuCsrlKvbaj7nct1Y-AesFLrGMg`;
  // apiURL: string =
  //   'https://orgintel-dev-cd.sbp.eyclienthub.com/api/v1.0/orgkey?name=BP&country=UNITED STATES OF AMERICA';
  apiURL: string =
    'https://orgintel-dev-cd.sbp.eyclienthub.com/api/v1.0/orgkey';
  constructor(private httpClient: HttpClient) {}

  public getData(companyName: any, country: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Credential': 'true',
      // 'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('Authorization', 'Bearer ' + this.auth_token);
    return this.httpClient.get(
      `${this.apiURL}?name=${companyName}&country=${country}`,
      { headers: headers }
    );
  }
}
// "start": "npm run env -s && ng serve --proxy-config proxy.conf.js",
