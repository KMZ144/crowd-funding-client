import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent } from './components/donations/donations.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
     canActivate:[],
    children: [
      { path: 'details', component:  UserDetailsComponent},
      {path :'donations',component:DonationsComponent},
      { path: 'projects', component:UserProjectsComponent },
      { path: 'edit', component:EditUserComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DonationsComponent,
    UserDetailsComponent,
    UserProjectsComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class UserModule { }
