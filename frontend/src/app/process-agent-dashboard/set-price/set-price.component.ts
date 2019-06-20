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

  setPrice: FormGroup;
  constructor(private router: ActivatedRoute, private formBuilder: FormBuilder, private service: ServiceService, private route: Router) { }
  data;
  bool = false;
  id;

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = params['id'];
    })

    this.setPrice = this.formBuilder.group({
      price: ['', Validators.required]
    })
  }


  onSubmit() {
    this.setPrice.value['id'] = this.id
    console.log(this.setPrice.value);
    // this.service.setPrice(this.setPrice.value).subscribe((res:any)=>{
    //   console.log(res);
    //   this.route.navigate(['dashboard']);
    // })

  }
  backtodash() {
    this.route.navigate(['dashboard']);
  }

}

