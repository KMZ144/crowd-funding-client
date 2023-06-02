import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    private router:Router,
  ){}

  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.userId = JSON.parse(this.user).id
    console.log(this.userId)
    this.userService.getUserDonations(this.userId).subscribe({
      // next:(response)=>{console.log(response);this.data=response},
      next:(res: any)=>{
      this.data=res
      console.log(res)
      this.userService.setData(res);
      }

    });
  }
  submit(e:any){
    e.preventDefault();
    this.router.navigate(['/donations'])
  }


}
