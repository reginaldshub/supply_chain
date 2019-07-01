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
  selector: 'app-inspection-report',
  templateUrl: './inspection-report.component.html',
  styleUrls: ['./inspection-report.component.css']
})
export class InspectionReportComponent implements OnInit {
  InspectionReport: FormGroup;
  selectedValue: string;
  humidityunit: string;
  data: any;
  tempunit: string;
  today = new Date();
 date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService, private route: ActivatedRoute) { }
  id;
  ngOnInit() {
    this.InspectionReport = this.formBuilder.group({
      CropVariety: ['',[ Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z\']+$') ] ],
      CropSeason: ['', Validators.required],
      CropName: ['',[ Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z\']+$') ] ],
      Temperature: ['', [Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?$')]],
      TemerpatureUnit: ['', Validators.required],
      Humidity: ['', [Validators.required, Validators.pattern('^[0-9]?[0-9]?$')]],
      HumidityUnit: ['', Validators.required],
      InspectionDate: [{value: this.date, disabled: true}]
    })
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.service.getlandbyId(this.id).subscribe((res: any) => {
        console.log(res)
        this.data = res.land;
      })
    });

    const TemperatureControl = this.InspectionReport.get('Temperature');

    this.InspectionReport.get('TemerpatureUnit').valueChanges
      .subscribe(TemerpatureUnit => {

        if (TemerpatureUnit === 'Celsius') {
          TemperatureControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?$')]);
        }

        if (TemerpatureUnit === 'Farenheit') {
          TemperatureControl.setValidators([Validators.required, Validators.pattern('^[+-][0-9]?[0-9]?[0-9]?$')]);
        }
        TemperatureControl.updateValueAndValidity();
      });

  }


  
  TemerpatureUnits: UnitsInterface[] = [
    { value: 'Celsius', viewValue: 'Celsius' },
    { value: 'Farenheit', viewValue: 'Farenheit' }
  ];

  HumidityUnits: UnitsInterface[] = [
    { value: 'grams', viewValue: 'grams' },
  ];

  CropSeasons: UnitsInterface[] = [
    { value: 'summer', viewValue: 'Summer' },
    { value: 'winter', viewValue: 'Winter' },
    { value: 'rainy', viewValue: 'Rainy' }
  ];

  reset() {
    this.InspectionReport.reset();
  }

  TemperatureValidator(value){
    // alert(value)
    console.log(value)
  }
  backtoinspection() {
    this.router.navigate(['inspection', this.id])
  }

  onSubmit() {
    // console.log("InspectionReport", this.InspectionReport.value)
    this.InspectionReport.value['InspectionDate'] = this.date;
    let inspectionReportData = {
      InspectionReport: "inspected",
      inspection_details: this.InspectionReport.value,
      InspectorName: localStorage.getItem("InspectorName"),
      RegistrationNo: this.data.RegistrationNo,
      land_details: this.data,
      email: localStorage.getItem('email')
    }
    console.log("inspectionReportData",inspectionReportData);
    this.service.InspectionReport(inspectionReportData).subscribe((res:any)=>{
      console.log("inspector Submit",res)
      if(res.status == "COMMITTED")
       this.router.navigate(['inspectorDashboard']);
    })
  }
}
