import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cultivate-details',
  templateUrl: './cultivate-details.component.html',
  styleUrls: ['./cultivate-details.component.css']
})
export class CultivateDetailsComponent implements OnInit {

  constructor(private service:ServiceService,private route: ActivatedRoute) { }

  id: number;
  private sub: any;
  ngOnInit() {

    
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.cutivateDetails(this.id).subscribe((res:any)=>{
        console.log(res);
      })
   });
   
  }

}
