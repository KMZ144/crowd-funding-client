import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private  id:Number=Number(this.activatedRoute.snapshot.paramMap.get('id'));


  constructor(private projectService:ProjectService,private activatedRoute: ActivatedRoute){}
  data:any=null
  project:any=null
  similarProjects:any
  urls:String[]=[]
  ngOnInit():void {
    this.projectService.getProjectById(this.id).subscribe(
      {
        next:(res)=>{
          this.data=res
          this.project=this.data.project
          this.similarProjects=this.data.similar_projects
          console.log(this.project);
          for(let i=0;i<this.project.images.length;i++){
            this.project.images[i].url=environment.API_URL.concat(this.project.images[i].url)
        }
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )

  }

  }

