import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css']
})
export class LatestProjectsComponent {
  @Input() projects:any=[]

}
