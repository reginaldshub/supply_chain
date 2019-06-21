import { Component, OnInit,ViewChild} from '@angular/core';
import { ServiceService } from '../service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retail-agent-dashboard',
  templateUrl: './retail-agent-dashboard.component.html',
  styleUrls: ['./retail-agent-dashboard.component.css']
})
export class RetailAgentDashboardComponent implements OnInit {

 
  displayedColumns: string[] = [ 'internalBatchNo', 'processorName', 'processorAddress', 'quantity','temperature','rostingDuration','From'];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);

  display=false;
  constructor(private service :ServiceService,private router:Router) { }

  ngOnInit(){

    this.getAll();
  }
 
  getAll(){
    let email = localStorage.getItem('email');
    let data = {"RetailAgentEmail":email}
    console.log(data);
   this.service.getTransferedPackages(data).subscribe((res:any)=>{
     console.log(res.packages);
     if(res.packages.length==0){
       this.display=false;
     }else{
     this.display=true;
     ELEMENT_DATA= res.packages;
     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     }
     
     })
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }
}

export interface LandData {
  FarmerName: string;
  RegistrationNo: number;
  FarmAddress: number;
  State: string;
}

 let ELEMENT_DATA: LandData[] ;

