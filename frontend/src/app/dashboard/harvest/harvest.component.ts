import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harvest',
  templateUrl: './harvest.component.html',
  styleUrls: ['./harvest.component.css']
})
export class HarvestComponent implements OnInit {

  harvest:FormGroup;

  constructor(private service:ServiceService,private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit() {
    this.harvest=this.formBuilder.group({
      CropVariety:['',Validators.required],
      Dateofstart:['',Validators.required],
      Temperature:['',Validators.required],
      Humidity:['',Validators.required],
      Quantity:['',Validators.required]
    })
  }

  onSubmit(){
    this.harvest.value['RegistrationNo']=localStorage.getItem("id");
    this.harvest.value['FarmerName']=localStorage.getItem("name");
    console.log(this.harvest.value);
    this.service.harvest(this.harvest.value).subscribe((res:any)=>{
      console.log(res);
    })
  }

  backtodash(){
    this.route.navigate(['dashboard'])
  }

}
