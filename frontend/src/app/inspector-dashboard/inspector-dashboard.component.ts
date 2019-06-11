import { Component, OnInit,ViewChild} from '@angular/core';
import { ServiceService } from '../service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './inspector-dashboard.component.html',
  styleUrls: ['./inspector-dashboard.component.css']
})
export class InspectorDashboardComponent implements OnInit {
  displayedColumns: string[] = ['RegistrationNo', 'FarmerName', 'FarmAddress', 'State','Details','Action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);

  display=false;

  constructor(private service :ServiceService,private router:Router) {
    
   }

  ngOnInit(){

   this.getAllLands();
 }

 getAllLands(){
  this.service.getLandsForInspection().subscribe((res:any)=>{
    console.log(res)
    if(res.land.length==0){
      this.display=false;
    }else{
    this.display=true;
    ELEMENT_DATA= res.land as LandData[];
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

  getland(id:any){
  this.service.getlandbyId(id).subscribe((res:any)=>{
    this.router.navigate(['inspectorView']) 
  })
}

}
  
export interface LandData {
  FarmerName: string;
  RegistrationNo: number;
  FarmAddress: number;
  State: string;
}

 let ELEMENT_DATA: LandData[] ;
