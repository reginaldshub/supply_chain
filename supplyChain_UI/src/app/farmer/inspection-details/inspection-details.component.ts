import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})
export class InspectionDetailsComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService,private route: ActivatedRoute) { }


  data;
  InspectionDetails: any;

  id: number;
  private sub: any;
  details;
  bool: Boolean = false;

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

}
