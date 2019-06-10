import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cultivalte',
  templateUrl: './cultivalte.component.html',
  styleUrls: ['./cultivalte.component.css']
})
export class CultivalteComponent implements OnInit {
  cultivate:FormGroup;
  constructor(private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }

  ngOnInit() {
    this.cultivate=this.formBuilder.group({
      CropVariety:['',Validators.required],
      Dateofstart:['',Validators.required]
    })
  }


onSubmit(){
  this.service.cultivate(this.cultivate.value).subscribe((res:any)=>{
    console.log(res);
  })

}
backtodash(){
  this.route.navigate(['dashboard']);
 }

}
