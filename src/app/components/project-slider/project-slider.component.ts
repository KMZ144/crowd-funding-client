import { ProjectService } from './../../services/project.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css']
})
export class ProjectSliderComponent {
  private  id:Number=Number(this.activatedRoute.snapshot.paramMap.get('id'));
  constructor(private activatedRoute: ActivatedRoute,private projectService:ProjectService) { }
  project:any
  ngOnInit(): void {
    this.projectService.getProjectById(this.id).subscribe(
      {
        next:(res)=>{
          this.project=res
          console.log(res);
        }
      }
    )

  }

}
