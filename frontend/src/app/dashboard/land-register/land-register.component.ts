import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-register',
  templateUrl: './land-register.component.html',
  styleUrls: ['./land-register.component.css']
})
export class LandRegisterComponent implements OnInit {
  landRegister:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }

  ngOnInit() {
    this.landRegister  =  this.formBuilder.group({
      RegistrationNo:['',Validators.required],
      FarmerName:['',Validators.required],
      FarmAddress:['',Validators.required],
      State:['',Validators.required],
      Country:['',Validators.required],
      ExporterName:['',Validators.required],
      ImporterName:['',Validators.required]
    })
  }

  reset(){
    this.landRegister.reset();
  }

  onSubmit(){
   console.log(this.landRegister.value);
   this.service.land_register(this.landRegister.value).subscribe((res:any)=>{
     console.log(res);
     this.route.navigate(['dashboard']);
   })
  }
  backtodash(){
   this.route.navigate(['dashboard']);
  }

}
