import { ProjectService } from 'src/app/services/project.service';

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Directive } from '@angular/core';


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})

export class RateComponent {

  @Input()id:any
  max = 5;
  rate = 0;
  isReadonly = false;

  constructor(private projectService:ProjectService) {
  }

  rateProject(){
    this.projectService.rate(Number(this.id),this.rate).subscribe(
      {
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )

  }


}

