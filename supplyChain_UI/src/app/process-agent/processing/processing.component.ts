import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export interface UnitsInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  process:FormGroup;
  constructor(private router: ActivatedRoute,private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }
   data;
   processquantityunit;
   bool= true;
   id;
   details=[];
   crop;
   lands; 
   bool1=false;
   
  ngOnInit(){
  this.lands = this.router.snapshot.paramMap.get('lands');
  console.log("THIS LANDS", this.lands)
     var array = this.lands.split(",").map(Number);
     array.forEach(element => {
      this.service.getlandbyId(element).subscribe((res: any) => {
        this.details.push(res);
        console.log(this.details);
      })
  });
    
    this.process=this.formBuilder.group({
      processQuantity : ['',Validators.required],
      processQuantityUnit : ['',Validators.required],
      processStartTime :  ['',Validators.required],
      processEndTime :  ['',Validators.required],
      ProcessDuration : ['',Validators.required],
      processorTemperature : ['',Validators.required],
      internalBatchNo : ['',Validators.required],
      processorName   : ['',Validators.required],
      processorAddress: ['',Validators.required]
    })
  }


onSubmit(){
  this.process.value['lands']= this.lands;
  this.process.value['email'] = localStorage.getItem('email');
  // this.process.value['land_details'] = this.details[0].land;

  let processData = {
    process_details: this.process.value,
    land_details: this.details[0].land
  }
  console.log(processData);
  this.service.process(processData).subscribe((res:any)=>{  
  //   console.log(res);
  // this.route.navigate(['processedDashboard']);
  })
}

processQuantityUnits: UnitsInterface[] = [
  { value: 'kg', viewValue: 'Kilo grams' },
  { value: 'lts', viewValue: 'Litres' }
];

}

