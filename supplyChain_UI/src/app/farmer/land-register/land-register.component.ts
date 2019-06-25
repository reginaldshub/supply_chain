import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-register',
  templateUrl: './land-register.component.html',
  styleUrls: ['./land-register.component.css']
})
export class LandRegisterComponent implements OnInit {
  RegisterLand:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }

  ngOnInit() {
    this.RegisterLand  =  this.formBuilder.group({
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
    this.RegisterLand.reset();
  }

  onSubmit(){
  let email = localStorage.getItem('email');
   console.log(this.RegisterLand.value['email']=email);
   this.service.land_register(this.RegisterLand.value).subscribe((res:any)=>{
     console.log(res);
     this.route.navigate(['farmer']);
   })
  }
  backtodash(){
   this.route.navigate(['farmer']);
  }

}
