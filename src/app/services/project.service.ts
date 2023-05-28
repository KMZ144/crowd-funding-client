import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl:string="http://localhost:8000/api"
  constructor(private http:HttpClient) {}
  getAllProjects(){
    return this.http.get(`${this.baseUrl}/home`)
  }
  getProjectById(ProjectId:number){
    return this.http.get(`${this.baseUrl}/${ProjectId}`)
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
