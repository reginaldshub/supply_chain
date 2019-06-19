import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.css']
})
export class SetPriceComponent implements OnInit {

  setPrice:FormGroup;
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
    
    this.setPrice=this.formBuilder.group({
      price:['',Validators.required]
    })
  }


onSubmit(){
  console.log(this.setPrice.value);
  // this.service.setPrice(this.setPrice.value).subscribe((res:any)=>{
  //   console.log(res);
  //   this.route.navigate(['dashboard']);
  // })

}
backtodash(){
  this.route.navigate(['dashboard']);
 }

}

