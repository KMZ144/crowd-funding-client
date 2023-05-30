import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl:string=`${environment.API_URL}/api`
  private projects: any;
  constructor(private http:HttpClient) {}
  getAllProjects(){
    return this.http.get(`${this.baseUrl}/home`)
  }

  setData(data: any) {
    this.projects = data;
  }

  getData(): any {
    return this.projects;
  }

  getProjectById(ProjectId:Number){
    return this.http.get(`${this.baseUrl}/projects/${ProjectId}`)
  }
  addProject(Project:any){
    return this.http.post(this.baseUrl,Project)
  }
  editProject(id:any,Project:any){
    return this.http.put(`${this.baseUrl}/${id}`,Project)
  }
  deleteProject(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
