import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-land-register',
  templateUrl: './land-register.component.html',
  styleUrls: ['./land-register.component.css']
})
export class LandRegisterComponent implements OnInit {
  landRegister:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:ServiceService,private dialogRef:MatDialogRef<LandRegisterComponent>) { }

  ngOnInit() {
    this.landRegister  =  this.formBuilder.group({
      RegistrationNo:['',Validators.required],
      FarmerName:['',Validators.required],
      farmAddress:['',Validators.required],
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
   })
  }

}
