import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cultivate-details',
  templateUrl: './cultivate-details.component.html',
  styleUrls: ['./cultivate-details.component.css']
})
export class CultivateDetailsComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.cutivateDetails().subscribe((res:any)=>{
      console.log(res);
    })
  }

}
