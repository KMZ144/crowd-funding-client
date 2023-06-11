import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})


export class DonationsComponent implements OnInit {
  userId:number=0;
  user:any={};
  data:any;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private userService:UserService,
  ){}

  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.userId = JSON.parse(this.user).id
    // console.log(this.userId)
    this.userService.getUserDonations(this.userId).subscribe({
      next:(res: any)=>{
      this.data=res
      console.log(res)
      this.userService.setData(res);
      // this.data.picture=environment.API_URL.concat(this.data.picture)

      }
    }
  );

}
}
