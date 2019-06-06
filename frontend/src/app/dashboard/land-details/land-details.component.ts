import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<LandDetailsComponent>,private service:ServiceService) { }

  ngOnInit() {
   let data =this.service.getlandDetails();
   console.log(data);
  }

}
