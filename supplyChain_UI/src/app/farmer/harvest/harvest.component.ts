import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-harvest',
  templateUrl: './harvest.component.html',
  styleUrls: ['./harvest.component.css']
})
export class HarvestComponent implements OnInit {

  harvest: FormGroup;
  id: number;
  private sub: any;
  details;
  data;
  bool: Boolean = false;


  constructor(private router: ActivatedRoute, private service: ServiceService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.cutivateDetails(this.id).subscribe((res: any) => {
        this.bool = true;
        console.log(res);
        console.log(this.data = res.land);
        this.details = res.cultivationDetails;
        console.log(this.details);
      })
    });

    this.harvest = this.formBuilder.group({
      CropVariety: ['', Validators.required],
      Dateofstart: ['', Validators.required],
      Temperature: ['', Validators.required],
      Humidity: ['', Validators.required],
      Quantity: ['', Validators.required]
    })
  }

  onSubmit() {
    this.harvest.value['RegistrationNo'] = localStorage.getItem("id");
    this.harvest.value['FarmerName'] = localStorage.getItem("name");
    this.harvest.value['email']=localStorage.getItem('email');
  
    console.log(this.harvest.value);
    this.service.harvest(this.harvest.value).subscribe((res: any) => {
      console.log(res);
      this.route.navigate(['farmer']);
    })
  }

  backtodash() {
    this.route.navigate(['farmer'])
  }

}
