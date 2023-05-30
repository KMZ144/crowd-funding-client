import { Component } from '@angular/core';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private projectService: ProjectService) { }
  projects: any;
  ngOnInit(): void {
    this.projects = this.projectService.getData()
console.log(this.projects)
  }
}
