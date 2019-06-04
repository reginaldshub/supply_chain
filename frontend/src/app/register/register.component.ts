import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  
  roles=['Farmer','Inspector']
  constructor(private formBuilder:FormBuilder,private service:ServiceService) { }

  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      name:['',Validators.required],
      role : ['',Validators.required],
      id   : ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   
    
  }

  onSubmit(){
    
    console.log(this.registerForm.value);
    this.service.registration(this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    }
  )}

  }
