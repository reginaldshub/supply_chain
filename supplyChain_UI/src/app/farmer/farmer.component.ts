import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})


export class FarmerComponent implements OnInit {

  displayedColumns: string[] = ['RegistrationNo', 'FarmerName', 'FarmAddress', 'State', 'Action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);

  display = false;

  constructor(private service: ServiceService, private router: Router) {

  }

  ngOnInit() {
     this.getAll();
  }

  getAll() {
    this.service.lands().subscribe((res: any) => {
      console.log(res);
      if (res.allLands.length == 0) {
        this.display = false;
      } else {
        this.display = true;
        ELEMENT_DATA = res.allLands as LandData[];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    })
  }

  addLand(){
   this.router.navigate(['landRegister']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cultivate(id,name){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    this.router.navigate(['/cultivate',id]);
  }
  
  harvest(id,name){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    this.router.navigate(['/harvest',id])
  }

}

export interface LandData {
  FarmerName: string;
  RegistrationNo: number;
  FarmAddress: number;
  State: string;
}

let ELEMENT_DATA: LandData[];
