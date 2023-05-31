import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUser:any
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {

    this.loggedUser=this.authService.loggedUser
    console.log(this.loggedUser);
  }
 get getImageUrl(){
    return this.loggedUser.image
  }
   logout(){
    this.authService.logout()
  }

}
