import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: any;
  private baseUrl: string = `${environment.API_URL}/auth`;
  private headers = new HttpHeaders({
    'Content-Type':'multipart/form-data'
  })
  constructor(private http: HttpClient) {}

  login(credentials:any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  register(credentials:any) {
    return this.http.post(`${this.baseUrl}/register`, credentials,{
      headers:this.headers
    });
  }
  logout() {
    this.loggedUser = undefined;
  }
  getToken() {
    return;
  }
}
