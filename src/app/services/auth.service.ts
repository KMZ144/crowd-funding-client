import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: any;
  private baseUrl: string = `${environment.API_URL}/auth`;


  // private headers = new HttpHeaders({
  //   'Content-Type':'multipart/form-data'
  // })
  constructor(private http: HttpClient , private router:Router ) { }
  // ; boundary = ${ this.boundary }
  // boundary = '----WebKitFormBoundary' + Math.random().toString(36).substr(2, 15);
  // ; boundary = ${ this.boundary }
  headers = new HttpHeaders({
    // 'Content-Type': `multipart/form-data`,
    // 'accept':'*/*'

  });
  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  register(credentials: any) {
    console.log('credentials:', credentials)
    return this.http.post(`${this.baseUrl}/register`,credentials,{headers:this.headers});
  }
  logout() {
    this.loggedUser = undefined;
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  get getToken() {
    return localStorage.getItem('token');
  }
}
