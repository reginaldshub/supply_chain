import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspector-view',
  templateUrl: './inspector-view.component.html',
  styleUrls: ['./inspector-view.component.css']
})
export class InspectorViewComponent implements OnInit {
  data;
  InspectionDetails: any;

  id: number;
  private sub: any;
  details;
  bool: Boolean = false;

  constructor(private router:Router,private service:ServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
   
      this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.getlandbyId(this.id).subscribe((res: any) => {
        this.bool = true;
        console.log(res);
        console.log(this.data = res.land);

         this.details = res.cultivationtionDetails[0];
         if(res.inspectionDetails.length!= 0)
         this.InspectionDetails =res.inspectionDetails[0].InspectionData;
      })
    }); 
  
  }


  SubmitInspectionReport(){
    let inspectionData = {
      InspectionReport: "inspected",
        RegistrationNo: this.data.RegistrationNo,
        InspectorName: localStorage.getItem("InspectorName"),
        FarmerName: this.data.FarmerName,
    }
    this.service.InspectionReport(inspectionData).subscribe((res:any)=>{
      if(res.status == "COMMITTED")
       this.router.navigate(['inspectorDashboard']);
     console.log("inspector Submit",res)
      
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

