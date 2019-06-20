import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-harvest-details',
  templateUrl: './harvest-details.component.html',
  styleUrls: ['./harvest-details.component.css']
})
export class HarvestDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute,private service:ServiceService) { }
id;
details;
bool=false;
data;
crop;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.harvestDetails().subscribe((res: any) => {
        this.bool=true;
         this.data = res.land;
         this.crop = res.cultivationDetails;
        this.details=res.harvestDetails;
      })
    });
  }
}
