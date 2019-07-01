import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


export interface UnitsInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-harvest',
  templateUrl: './harvest.component.html',
  styleUrls: ['./harvest.component.css']
})
export class HarvestComponent implements OnInit {
  quantitytyunit;
  harvest: FormGroup;
  id: number;
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
      CropVariety: ['',[ Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z\']+$') ] ],
      CropMeasureCategory: ['', Validators.required],
      Dateofstart: ['', Validators.required],
      DateofEnd: ['', Validators.required],
      Temperature: ['', [Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?$')]],
      TemerpatureUnit: ['', Validators.required],
      Humidity: ['', [Validators.required, Validators.pattern('^[0-9]?[0-9]?$')]],
      HumidityUnit: ['', Validators.required],
      Quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      QuantityUnit: ['', Validators.required]
    })

    const TemperatureControl = this.harvest.get('Temperature');

    this.harvest.get('TemerpatureUnit').valueChanges
      .subscribe(TemerpatureUnit => {

        if (TemerpatureUnit === 'Celsius') {
          TemperatureControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?$')]);
        }

        if (TemerpatureUnit === 'Farenheit') {
          TemperatureControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?[0-9]?$')]);
        }
        TemperatureControl.updateValueAndValidity();
      });


      const CropMeasureCategoryControl = this.harvest.get('Temperature');
      this.harvest.get('CropMeasureCategory').valueChanges
      .subscribe(CropMeasureCategory => {

        if (CropMeasureCategory == 'Solid') {
          this.quantitytyunit = 'Kilograms';
          // CropMeasureCategoryControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?$')]);
        }

        if (CropMeasureCategory == 'Liquid') {
          this.quantitytyunit = 'litres';
          // CropMeasureCategoryControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?[0-9]?$')]);
        }
        CropMeasureCategoryControl.updateValueAndValidity();
      });

  }

  onSubmit() {
    this.harvest.value['RegistrationNo'] = localStorage.getItem("id");
    this.harvest.value['FarmerName'] = localStorage.getItem("name");
    this.harvest.value['email'] = localStorage.getItem('email');

    let harvestDetails = {
      harvest_details: this.harvest.value,
      RegistrationNo: this.id,
      land_details: this.data
    }
    console.log(harvestDetails);
    this.service.harvest(harvestDetails).subscribe((res: any) => {
      console.log(res);
      this.route.navigate(['farmer']);
    })
  }

  TemerpatureUnits: UnitsInterface[] = [
    { value: 'Celsius', viewValue: 'Celsius' },
    { value: 'Farenheit', viewValue: 'Farenheit' }
  ];


  CropMeasureCategories: UnitsInterface[] = [
    { value: 'Solid', viewValue: 'Solid' },
    { value: 'Liquid', viewValue: 'Liquid' },
    // { value: 'Gaseous', viewValue: 'Gaseous' }
  ];

  HumidityUnits: UnitsInterface[] = [
    { value: 'grams', viewValue: 'grams' }
  ];

  QuantityUnits: UnitsInterface[] = [
    { value: 'Kilograms', viewValue: 'Kilograms' },
    { value: 'litres', viewValue: 'litres' }
  ];

  reset() {
    this.harvest.reset();
  }

  backtodash() {
    this.route.navigate(['farmer'])
  }

}
