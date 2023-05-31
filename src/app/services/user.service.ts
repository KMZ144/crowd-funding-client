import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string=`${environment.API_URL}/api`
  private users: any;
  constructor(private http:HttpClient) {}

  setData(data: any) {
    this.users = data;
  }

  getData(): any {
    return this.users;
  }

  // getUserDetails(userid:number){
  //   return this.http.get(`${this.baseUrl}/profile/${userid}`);
  // }

  getUserDonations(userid:number):any{
    return this.http.get(`${this.baseUrl}/profile/${userid}/donations`)
  }
}
