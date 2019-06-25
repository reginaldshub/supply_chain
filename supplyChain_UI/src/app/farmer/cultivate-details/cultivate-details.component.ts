import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cultivate-details',
  templateUrl: './cultivate-details.component.html',
  styleUrls: ['./cultivate-details.component.css']
})
export class CultivateDetailsComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) {
    
   }

  id: number;
  private sub: any;
  details;
  data;
  bool: Boolean = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.cutivateDetails(this.id).subscribe((res: any) => {
        this.bool = true;
        console.log(res);
        console.log(this.data = res.land);

        this.details = res.cultivationDetails;
        console.log(this.details);
      })
    });

  }

}

export interface cultivateDetails {
  CropVariety: string,
  Dateofstart: string
}
