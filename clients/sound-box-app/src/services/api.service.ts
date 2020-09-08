import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private uriApi = 'http://localhost:3000';

  public constructor(
    private _httpClient: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {

    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return headers;
  }

  public get<T>(relativeUrl: string): Observable<T> {
    const headers: any = this.getHeaders();
    const url = `${this.uriApi}/${relativeUrl}`;

    return this._httpClient.get<T>(url, { headers: headers });
  }

  public post<T>(relativeUrl: string, body: any): Observable<T> {
    const headers: any = this.getHeaders();
    const url = `${this.uriApi}/${relativeUrl}`;

    return this._httpClient.post<T>(url, body, { headers: headers });
  }

  public delete<T>(relativeUrl: string, id: string): Observable<T> {
    const headers: any = this.getHeaders();
    const url = `${this.uriApi}/${relativeUrl}/${id}`;

    return this._httpClient.delete<T>(url, { headers: headers });
  }
}
