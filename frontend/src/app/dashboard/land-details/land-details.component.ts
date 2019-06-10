import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit {
  data;
  constructor(private service:ServiceService) { }

  ngOnInit() {
   this.data = this.service.getlandDetails();
   console.log(this.data as LandDetails)
   console.log(this.data.land.RegistrationNo)
   
  }

}
export interface LandDetails{
  RegistrationNo:String
  FarmerName:  String,
  FarmAddress:  String, 
  State:  String,
  Country:  String,
  ExporterName:  String, 
  ImporterName: String,
  DateOfRegistration:  String, 
}

