import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'supplyChain';

  constructor(private fb: FormBuilder,private service:ServiceService){}
  addForm: FormGroup;
ngOnInit() {
  // this.addForm=this.fb.group({
  //   reg_no:['',[Validators.required,Validators.min(6),Validators.pattern('[0-9]*')]],
  //   farmer_name:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
  //   farm_address:['',[Validators.required]],
  //   land_size:['',[Validators.required,Validators.pattern('[0-9]*')]]
  // })
  

  
}

// save(){
//   console.log(this.addForm.value);
  
//  this.service.land_register(this.addForm.value).subscribe((res:any)=>{
//   console.log(res+"rsp");
//  },(err)=>{
//    console.log(err);
//  });
// }

}
