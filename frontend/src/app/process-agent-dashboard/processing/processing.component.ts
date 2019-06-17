import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  process:FormGroup;
  constructor(private router: ActivatedRoute,private formBuilder: FormBuilder,private service:ServiceService,private route:Router) { }
data;
bool= false;
id;
details;
crop;

  ngOnInit() {

    this.router.params.subscribe(params => {
      let id = params['id'];
      this.service.getlandbyId(id).subscribe((res: any) => {
        console.log(this.data = res.land );
       console.log(this.crop = res.cultivationtionDetails[0]);
      console.log(this.details=res.harvestDetails[0]);
        this.bool = true;
      })
    })
    
    this.process=this.formBuilder.group({
      quantity        : ['',Validators.required],
      rostingDuration : ['',Validators.required],
      packageDateTime : ['',Validators.required],
      temperature     : ['',Validators.required],
      internalBatchNo : ['',Validators.required],
      processorName   : ['',Validators.required],
      processorAddress: ['',Validators.required]
    })
  }


onSubmit(){
  this.process.value['RegistrationNo']=localStorage.getItem("id");
  this.process.value['FarmerName']=localStorage.getItem("name");
  console.log(this.process.value);
  this.service.process(this.process.value).subscribe((res:any)=>{  
  this.route.navigate(['processAgentDashboard']);
  })

}
backtodash(){
  this.route.navigate(['processAgentDashboard']);
 }

}

