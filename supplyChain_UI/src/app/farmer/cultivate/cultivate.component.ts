import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export interface SeasonsInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cultivalte',
  templateUrl: './cultivate.component.html',
  styleUrls: ['./cultivate.component.css']
})
export class CultivalteComponent implements OnInit {
cultivate:FormGroup;
constructor(private router: ActivatedRoute,private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }
 data;
 today = new Date();

 date = this.today.getDate() +'-'+(this.today.getMonth()+1)+ '-' + this.today.getFullYear();
 bool= false;

  ngOnInit() {

    this.router.params.subscribe(params => {
      let id = params['id'];
      this.service.getlandbyId(id).subscribe((res: any) => {
        console.log(this.data = res.land );
        this.bool = true;
      })
    })
    
    this.cultivate = this.formBuilder.group({
      CropName:['',[ Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z\']+$') ] ],
      Dateofstart:[{value: this.date, disabled: true}],
      CropSeason:['',Validators.required]

    })
  }

onSubmit(){
  this.cultivate.value['RegistrationNo']=localStorage.getItem("id");
  this.cultivate.value['FarmerName']=localStorage.getItem("name");
  this.cultivate.value['email']=localStorage.getItem('email');
  this.cultivate.value['Dateofstart'] = this.date;
  this.service.cultivate(this.cultivate.value).subscribe((res:any)=>{
    console.log(res);
    this.route.navigate(['farmer']);
  })
}

CropSeasons: SeasonsInterface[] = [
  { value: 'summer', viewValue: 'Summer' },
  { value: 'winter', viewValue: 'Winter' },
  { value: 'rainy', viewValue: 'Rainy' }
];

backtodash(){
  
  this.route.navigate(['farmer']);
 }

}
