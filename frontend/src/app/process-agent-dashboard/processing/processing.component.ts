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
   data;bool= true ;id;details= [];crop;lands;
   
  ngOnInit(){
  this.lands =this.router.snapshot.paramMap.get('lands');
     var array = this.lands.split(",").map(Number);
     array.forEach(element => {
      this.service.getlandbyId(element).subscribe((res: any) => {
        this.details.push(res);
        console.log(this.details);
    
      })
  });
    
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
  this.process.value['lands']= this.lands;
  this.process.value['email'] = localStorage.getItem('email');
  console.log(this.process.value);
  this.service.process(this.process.value).subscribe((res:any)=>{  
    console.log(res);
  this.route.navigate(['processAgentDashboard']);
  })
}

}

