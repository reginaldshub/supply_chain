import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cultivalte',
  templateUrl: './cultivalte.component.html',
  styleUrls: ['./cultivalte.component.css']
})
export class CultivalteComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }


onSubmit(){
  this.service.cultivate().subscribe((res:any)=>{
    console.log(res);
  })
  
}

}
