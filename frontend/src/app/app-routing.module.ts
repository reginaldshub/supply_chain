import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandRegisterComponent } from './dashboard/land-register/land-register.component';
import { LandDetailsComponent } from './dashboard/land-details/land-details.component';
import { CultivalteComponent } from './dashboard/cultivalte/cultivalte.component';
import { CultivateDetailsComponent } from './dashboard/cultivate-details/cultivate-details.component';
import { HarvestComponent } from './dashboard/harvest/harvest.component';
import { HarvestDetailsComponent } from './dashboard/harvest-details/harvest-details.component';
import { InspectorDashboardComponent } from './inspector-dashboard/inspector-dashboard.component';
import { InspectorViewComponent } from './inspector-dashboard/inspector-view/inspector-view.component';
import { ProfileComponent } from './profile/profile.component';
import { InspectionDetailsComponent } from './dashboard/inspection-details/inspection-details.component';
import { ProcessAgentDashboardComponent } from './process-agent-dashboard/process-agent-dashboard.component';
import { RetailAgentDashboardComponent } from './retail-agent-dashboard/retail-agent-dashboard.component';
import { InspectionComponent } from './inspector-dashboard/inspection/inspection.component';
import { ProcessingComponent } from './process-agent-dashboard/processing/processing.component';
import { ProcessingDetailsComponent } from './process-agent-dashboard/processing/processing-details/processing-details.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'harvest/:id',component:HarvestComponent},
  {path:'harvestDetails/:id',component:HarvestDetailsComponent},
  {path:'cultivate/:id',component:CultivalteComponent},
  {path:'cultivateDetails/:id',component:CultivateDetailsComponent},
  {path:'landRegister',component:LandRegisterComponent},
  {path:'landDetails/:id',component:LandDetailsComponent},
  {path:'inspectorDashboard',component:InspectorDashboardComponent},
  {path:'inspectorView/:id', component: InspectorViewComponent},
  {path:'inspectionDetails/:id',component:InspectionDetailsComponent},
  {path:'inspection/:id',component:InspectionComponent},
  {path:'processAgentDashboard',component:ProcessAgentDashboardComponent},
  {path:'process/:id',component:ProcessingComponent},
  {path:'processDetails/:id',component:ProcessingDetailsComponent},
  {path:'retailAgentDashboard',component:RetailAgentDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
