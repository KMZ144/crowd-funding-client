import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  id:number=0;
  data:any|null=null;
  constructor(private active:ActivatedRoute, private service:UserService){
    this.id=Number(this.active.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.service.getUserDonations(this.id).subscribe({
      next:(response: any)=>{console.log(response);this.data=response
      },
    });
  }
}

