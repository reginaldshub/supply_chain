import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandRegisterComponent } from './dashboard/land-register/land-register.component';
import { LandDetailsComponent } from './dashboard/land-details/land-details.component';
import { CultivalteComponent } from './dashboard/cultivalte/cultivalte.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'cultivate',component:CultivalteComponent},
  {path:'landRegister',component:LandRegisterComponent},
  {path:'landDetails',component:LandDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
