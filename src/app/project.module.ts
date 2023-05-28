import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'projects',
     canActivate:[],
    children: [
      { path: '', component: HomeComponent },
      { path: ':id', component:ProjectComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
