import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ServiceService) { }

  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    localStorage.setItem('email', this.loginForm.value.email);
    this.service.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);

      if (res.role === "Farmer") {
        this.router.navigate(['farmer']);
        localStorage.setItem("FarmerName", res.name);
        localStorage.setItem("name", res.name);
        localStorage.setItem("Role", res.role)
      }
      else if (res.role === "Inspector") {
        this.router.navigate(['inspectorDashboard']);
        localStorage.setItem("InspectorName", res.name)
        localStorage.setItem("name", res.name);
        localStorage.setItem("Role", res.role)
      }else if(res.role === "ProcessAgent"){
        this.router.navigate(['processAgentDashboard']);
        localStorage.setItem("ProcessAgentName", res.name)
        localStorage.setItem("name", res.name);
        localStorage.setItem("Role", res.role)
      }else if(res.role === "RetailAgent"){
        this.router.navigate(['retailAgentDashboard']);
        localStorage.setItem("RetailAgentName", res.name)
        localStorage.setItem("name", res.name);
        localStorage.setItem("Role", res.role)
      }
    },
      error => {
        console.log(error);
      }
    )
  }

}


