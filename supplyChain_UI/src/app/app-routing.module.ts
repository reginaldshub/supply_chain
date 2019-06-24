import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FarmerComponent } from './farmer/farmer.component';
import { LandRegisterComponent } from './farmer/land-register/land-register.component';
import { LandDetailsComponent } from './farmer/land-details/land-details.component';
import { CultivalteComponent } from './farmer/cultivate/cultivate.component';
import { CultivateDetailsComponent } from './farmer/cultivate-details/cultivate-details.component';
import { HarvestComponent } from './farmer/harvest/harvest.component';
import { HarvestDetailsComponent } from './farmer/harvest-details/harvest-details.component';
import { InspectorComponent } from './inspector/inspector.component';
import { InspectorViewComponent } from './inspector/inspector-view/inspector-view.component';
import { ProfileComponent } from './profile/profile.component';
import { InspectionDetailsComponent } from './farmer/inspection-details/inspection-details.component';
import { ProcessAgentComponent } from './process-agent/process-agent.component';
import { RetailAgentComponent } from './retail-agent/retail-agent.component';
import { InspectionComponent } from './inspector/inspection/inspection.component';
import { ProcessingComponent } from './process-agent/processing/processing.component';
import { ProcessingDetailsComponent } from './process-agent/processing/processing-details/processing-details.component';
import { ProcessedDashboardComponent } from './process-agent/processed-dashboard/processed-dashboard.component';
import { SetPriceComponent } from './process-agent/set-price/set-price.component';
import { TrasferedDashboardComponent } from './process-agent/trasfered-dashboard/trasfered-dashboard.component';
import { TransferComponent } from './process-agent/transfer/transfer.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'farmer',component:FarmerComponent},
  {path:'profile',component:ProfileComponent},
  {path:'harvest/:id',component:HarvestComponent},
  {path:'harvestDetails/:id',component:HarvestDetailsComponent},
  {path:'cultivate/:id',component:CultivalteComponent},
  {path:'cultivateDetails/:id',component:CultivateDetailsComponent},
  {path:'landRegister',component:LandRegisterComponent},
  {path:'landDetails/:id',component:LandDetailsComponent},
  {path:'inspectorDashboard',component:InspectorComponent},
  {path:'inspectorView/:id', component: InspectorViewComponent},
  {path:'inspectionDetails/:id',component:InspectionDetailsComponent},
  {path:'inspection/:id',component:InspectionComponent},
  {path:'processAgentDashboard',component:ProcessAgentComponent},
  {path:'process',component:ProcessingComponent},
  {path:'processDetails/:id',component:ProcessingDetailsComponent},
  {path:'processedDashboard',component:ProcessedDashboardComponent},
  {path:'setPrice/:id',component:SetPriceComponent},
  {path:'TransferDashboard',component:TrasferedDashboardComponent},
  {path:'transfer/:id',component:TransferComponent},
  {path:'retailAgentDashboard',component:RetailAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
