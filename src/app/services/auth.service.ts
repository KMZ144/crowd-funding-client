import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: any;
  private baseUrl: string = `${environment.API_URL}/auth`;
  constructor(private http: HttpClient) {}

  login(credentials:any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  register(credentials:any) {
    return this.http.post(`${this.baseUrl}/register`, credentials);
  }
  logout() {
    this.loggedUser = undefined;
  }
  getToken() {
    return;
  }
}
