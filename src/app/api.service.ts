import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log(process.env.apiUri);
    return this.http.get(`${process.env.apiUri}/api/external`);
  }
}
