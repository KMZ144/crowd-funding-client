import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
user:any;
userid:number=0;
data:any|null=null;
constructor(private active:ActivatedRoute, private service:AuthService ){
  this.userid=Number(this.active.snapshot.paramMap.get('id'));
  this.user =this.service.loggedUser;
}
  ngOnInit(): void {
    this.service.loggedUser.subscribe({
      // next:(response)=>{console.log(response);this.data=response},
    });
  }

}
