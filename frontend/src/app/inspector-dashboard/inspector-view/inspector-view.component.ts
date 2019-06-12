import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inspector-view',
  templateUrl: './inspector-view.component.html',
  styleUrls: ['./inspector-view.component.css']
})
export class InspectorViewComponent implements OnInit {
  data;
  InspectionDetails: any;
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
   this.data = this.service.getlandDetails();
   this.InspectionDetails = this.data.inspectionDetails[0].InspectionData;
   console.log(this.InspectionDetails)
   console.log(this.data as LandDetails)
   console.log(this.data.land.RegistrationNo)
   
  }


  SubmitInspectionReport(){
    let inspectionData = {
      InspectionReport: "inspected",
        RegistrationNo: this.data.land.RegistrationNo,
        InspectorName: localStorage.getItem("InspectorName"),
        FarmerName: this.data.land.FarmerName,
    }
    this.service.InspectionReport(inspectionData).subscribe((res:any)=>{
      if(res.status == "COMMITTED") this.router.navigate(['inspectorDashboard']);

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

