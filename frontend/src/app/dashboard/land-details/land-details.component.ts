import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit {

  data;
  bool = false;
  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.service.getlandbyId(id).subscribe((res: any) => {
        console.log(this.data = res.land as LandDetails );
        this.bool = true;
      })
    })
  }
}

  
export interface LandDetails {
  RegistrationNo: String
  FarmerName: String,
  FarmAddress: String,
  State: String,
  Country: String,
  ExporterName: String,
  ImporterName: String,
  DateOfRegistration: String,
}

