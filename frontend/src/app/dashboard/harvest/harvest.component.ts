import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-harvest',
  templateUrl: './harvest.component.html',
  styleUrls: ['./harvest.component.css']
})
export class HarvestComponent implements OnInit {

  constructor(private service:ServiceService,private dialogRef:MatDialogRef<HarvestComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.harvest().subscribe((res:any)=>{
      console.log(res);
    })
  }

}
