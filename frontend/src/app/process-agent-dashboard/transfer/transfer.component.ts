import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer: FormGroup;
  constructor(private router: ActivatedRoute, private formBuilder: FormBuilder, private service: ServiceService, private route: Router) { }
  data;
  bool = false;
  id;
   
  package
  ngOnInit() {

    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.service.getpackagebyId(this.id).subscribe((res:any)=>{
        console.log(this.package=res.package);
        this.bool = true;
      })
    })

    this.transfer = this.formBuilder.group({
      retailAgentemail: ['', Validators.required]
    })
  }

  onSubmit() {
    this.transfer.value['email'] = localStorage.getItem('email')
    this.transfer.value['id'] = this.id;
    console.log(this.transfer.value);
    this.service.transfer(this.transfer.value).subscribe((res:any)=>{
      console.log(res);
      this.route.navigate(['TransferDashboard']);
    })
  }
}

