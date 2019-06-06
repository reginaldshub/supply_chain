import { Component, OnInit,ViewChild} from '@angular/core';
import { ServiceService } from '../service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { LandRegisterComponent } from './land-register/land-register.component';
import { LandDetailsComponent } from './land-details/land-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  // displayedColumns: string[] = ['RegistrationNo', 'FarmerName', 'farmAddress', 'State','Country','ExporterName','ImporterName','DateofRegistration'];

  displayedColumns: string[] = ['RegistrationNo', 'FarmerName', 'farmAddress', 'State','Action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);

  display=false;
  constructor(private service :ServiceService,public dialog: MatDialog) {
    
   }

  ngOnInit(){
  this.service.lands().subscribe((res:any)=>{
    ELEMENT_DATA= res as LandData[];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.display=true;
    })
 }

  applyFilter(filterValue: string){
     this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

addLand(){
  const dailogconfig=new MatDialogConfig();
  dailogconfig.disableClose=true;
  dailogconfig.autoFocus=true;
  dailogconfig.width="50%";
  this.dialog.open(LandRegisterComponent,dailogconfig);
}

getland(id:any){
  console.log(id);
  const dailogconfig=new MatDialogConfig();
  dailogconfig.disableClose=true;
  dailogconfig.autoFocus=true;
  dailogconfig.width="50%";
  this.dialog.open(LandDetailsComponent,dailogconfig)
}

getcultivate(){
  
}

}
  
export interface LandData {
  FarmerName: string;
  RegistrationNo: number;
  farmAddress: number;
  State: string;
}

 let ELEMENT_DATA: LandData[] ;

//   {RegistrationNo: 1, FarmerName: 'Hydrogen', farmAddress: 1.0079, State: 'H'},
//   {RegistrationNo: 2, FarmerName: 'Helium', farmAddress: 4.0026, State: 'He'},
//   {RegistrationNo: 3, FarmerName: 'Lithium', farmAddress: 6.941, State: 'Li'},
//   {RegistrationNo: 4, FarmerName: 'Beryllium', farmAddress: 9.0122, State: 'Be'},
//   {RegistrationNo: 5, FarmerName: 'Boron', farmAddress: 10.811, State: 'B'},
//   {RegistrationNo: 6, FarmerName: 'Carbon', farmAddress: 12.0107, State: 'C'},
//   {RegistrationNo: 7, FarmerName: 'Nitrogen', farmAddress: 14.0067, State: 'N'},
//   {RegistrationNo: 8, FarmerName: 'Oxygen', farmAddress: 15.9994, State: 'O'},
//   {RegistrationNo: 9, FarmerName: 'Fluorine', farmAddress: 18.9984, State: 'F'},
//   {RegistrationNo: 10, FarmerName: 'Neon', farmAddress: 20.1797, State: 'Ne'},
//   {RegistrationNo: 11, FarmerName: 'Sodium', farmAddress: 22.9897, State: 'Na'},
//   {RegistrationNo: 12, FarmerName: 'Magnesium', farmAddress: 24.305, State: 'Mg'},
//   {RegistrationNo: 13, FarmerName: 'Aluminum', farmAddress: 26.9815, State: 'Al'},
//   {RegistrationNo: 14, FarmerName: 'Silicon', farmAddress: 28.0855, State: 'Si'},
//   {RegistrationNo: 15, FarmerName: 'Phosphorus', farmAddress: 30.9738, State: 'P'},
//   {RegistrationNo: 16, FarmerName: 'Sulfur', farmAddress: 32.065, State: 'S'},
//   {RegistrationNo: 17, FarmerName: 'Chlorine', farmAddress: 35.453, State: 'Cl'},
//   {RegistrationNo: 18, FarmerName: 'Argon', farmAddress: 39.948, State: 'Ar'},
//   {RegistrationNo: 19, FarmerName: 'Potassium', farmAddress: 39.0983, State: 'K'},
//   {RegistrationNo: 20, FarmerName: 'Calcium', farmAddress: 40.078, State: 'Ca'},
// ];
