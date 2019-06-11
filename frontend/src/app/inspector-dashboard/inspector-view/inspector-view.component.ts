import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-inspector-view',
  templateUrl: './inspector-view.component.html',
  styleUrls: ['./inspector-view.component.css']
})
export class InspectorViewComponent implements OnInit {
  data;
  constructor(private service:ServiceService) { }

  ngOnInit() {
   this.data = this.service.getlandDetails();
   console.log(this.data as LandDetails)
   console.log(this.data.land.RegistrationNo)
   
  }


  InspectionReport(report){
    let inspectionData = {
      InspectionReport: report,
        RegistrationNo: this.data.land.RegistrationNo,
        InspectorName: localStorage.getItem(name),
        FarmerName: this.data.land.FarmerName,
    }
    this.service.InspectionReport(inspectionData).subscribe((res:any)=>{
     console.log(res)
      
    })
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

