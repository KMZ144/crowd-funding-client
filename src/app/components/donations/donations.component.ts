import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  userId:any;
  user:any;
  data:any;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router,
  ){
    this.ActivatedRoute.paramMap.subscribe(params =>{
      this.userId = Number(params.get('id'));
    })

  }
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.userService.getUserDonations(this.user.id).subscribe({
      next:(response)=>{console.log(response);this.data=response},
    });
  }
  submit(e:any){
    e.preventDefault();
    this.router.navigate(['/donations'])
  }


}
