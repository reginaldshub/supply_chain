import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-processing-details',
  templateUrl: './processing-details.component.html',
  styleUrls: ['./processing-details.component.css']
})
export class ProcessingDetailsComponent implements OnInit {
id;package;bool=false;
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.id = +params['id'];
       // (+) converts string 'id' to a numberi
       
      console.log(this.id)
    this.getAll();
    })
  }

  getAll() {
    this.service.getpackagebyId(this.id).subscribe((res: any) => {
     console.log(res);
     this.bool =true;
     this.package = res.package;
    })
  }
}
