import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cultivalte',
  templateUrl: './cultivate.component.html',
  styleUrls: ['./cultivate.component.css']
})
export class CultivalteComponent implements OnInit {
cultivate:FormGroup;
  constructor(private router: ActivatedRoute,private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }
 data;
 bool= false;

  ngOnInit() {

    this.router.params.subscribe(params => {
      let id = params['id'];
      this.service.getlandbyId(id).subscribe((res: any) => {
        console.log(this.data = res.land );
        this.bool = true;
      })
    })
    
    this.cultivate=this.formBuilder.group({
      CropVariety:['',Validators.required],
      Dateofstart:['',Validators.required]
    })
  }


onSubmit(){

  this.cultivate.value['RegistrationNo']=localStorage.getItem("id");
  this.cultivate.value['FarmerName']=localStorage.getItem("name");
  this.cultivate.value['email']=localStorage.getItem('email');
  console.log(this.cultivate.value);
  this.service.cultivate(this.cultivate.value).subscribe((res:any)=>{
    console.log(res);
    this.route.navigate(['farmer']);
  })

}
backtodash(){
  
  this.route.navigate(['farmer']);
 }

}
