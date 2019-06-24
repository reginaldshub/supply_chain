import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:ServiceService) { }

  roles=['Farmer','Inspector','ProcessAgent','RetailAgent']
  
  ngOnInit(){  
    this.service.getUserProfile(localStorage.getItem('email')).subscribe((res:any)=>{
     console.log(res);
       this.Profile.patchValue(res.profile);
    })
    this.Profile  =  this.formBuilder.group({
      name:['',Validators.required],
      role : ['',Validators.required],
      id   : ['',Validators.required],
      email: ['', Validators.required]
    })
  }

}
