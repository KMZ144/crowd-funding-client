import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  userId:any;
  data:any;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private userService:UserService,
  ){
    this.userId=Number(this.ActivatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.userService.getUserDonations(this.userId).subscribe({
      next:(response:any)=>{console.log(response);this.data=response},
    });
  }
}

