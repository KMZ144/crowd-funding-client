import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent  },
  {path : 'register', component:RegisterComponent},
  {path : 'verify-email/{email}/{code}', component:EmailConfirmationComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
