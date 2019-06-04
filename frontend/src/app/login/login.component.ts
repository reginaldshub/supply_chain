import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Login } from '../interfaces/login';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private service:ServiceService) { }

  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit(){
    console.log(this.loginForm.value);

    this.service.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    }
)
}

}

