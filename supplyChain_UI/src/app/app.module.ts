import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FarmerComponent } from './farmer/farmer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { LandRegisterComponent } from './farmer/land-register/land-register.component';
import { LandDetailsComponent } from './farmer/land-details/land-details.component';
import { CultivalteComponent } from './farmer/cultivate/cultivate.component';
import { CultivateDetailsComponent } from './farmer/cultivate-details/cultivate-details.component';
import { HarvestComponent } from './farmer/harvest/harvest.component';
import { HarvestDetailsComponent } from './farmer/harvest-details/harvest-details.component';
import { InspectorComponent } from './inspector/inspector.component';
import { InspectorViewComponent } from './inspector/inspector-view/inspector-view.component';
import { InspectionDetailsComponent } from './farmer/inspection-details/inspection-details.component';
import { ProcessAgentComponent } from './process-agent/process-agent.component';
import { RetailAgentComponent } from './retail-agent/retail-agent.component';
import { InspectionComponent } from './inspector/inspection/inspection.component';
import { ProcessingComponent } from './process-agent/processing/processing.component';
import { ProcessingDetailsComponent } from './process-agent/processing/processing-details/processing-details.component';
import { ProcessedDashboardComponent } from './process-agent/processed-dashboard/processed-dashboard.component';
import { SetPriceComponent } from './process-agent/set-price/set-price.component';
import { TrasferedDashboardComponent } from './process-agent/trasfered-dashboard/trasfered-dashboard.component';
import { ProcessHeaderComponent } from './process-agent/process-header/process-header.component';
import { TransferComponent } from './process-agent/transfer/transfer.component';
import { FooterComponent } from './footer/footer.component';
import { InspectionReportComponent } from './inspector/inspection-report/inspection-report.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FarmerComponent,
    HeaderComponent,
    ProfileComponent,
    LandRegisterComponent,
    LandDetailsComponent,
    CultivalteComponent,
    CultivateDetailsComponent,
    HarvestComponent,
    HarvestDetailsComponent,
    InspectorComponent,
    InspectorViewComponent,
    InspectionDetailsComponent,
    ProcessAgentComponent,
    RetailAgentComponent,
    InspectionComponent,
    ProcessingComponent,
    ProcessingDetailsComponent,
    ProcessedDashboardComponent,
    SetPriceComponent,
    TrasferedDashboardComponent,
    ProcessHeaderComponent,
    TransferComponent,
    FooterComponent,
    InspectionReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
