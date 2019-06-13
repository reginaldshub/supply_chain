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
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { LandRegisterComponent } from './dashboard/land-register/land-register.component';
import { LandDetailsComponent } from './dashboard/land-details/land-details.component';
import { CultivalteComponent } from './dashboard/cultivalte/cultivalte.component';
import { CultivateDetailsComponent } from './dashboard/cultivate-details/cultivate-details.component';
import { HarvestComponent } from './dashboard/harvest/harvest.component';
import { HarvestDetailsComponent } from './dashboard/harvest-details/harvest-details.component';
import { InspectorDashboardComponent } from './inspector-dashboard/inspector-dashboard.component';
import { InspectorViewComponent } from './inspector-dashboard/inspector-view/inspector-view.component';
import { InspectionDetailsComponent } from './dashboard/inspection-details/inspection-details.component';
import { ProcessAgentDashboardComponent } from './process-agent-dashboard/process-agent-dashboard.component';
import { RetailAgentDashboardComponent } from './retail-agent-dashboard/retail-agent-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    LandRegisterComponent,
    LandDetailsComponent,
    CultivalteComponent,
    CultivateDetailsComponent,
    HarvestComponent,
    HarvestDetailsComponent,
    InspectorDashboardComponent,
    InspectorViewComponent,
    InspectionDetailsComponent,
    ProcessAgentDashboardComponent,
    RetailAgentDashboardComponent
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
