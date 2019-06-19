import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-processed-dashboard',
  templateUrl: './processed-dashboard.component.html',
  styleUrls: ['./processed-dashboard.component.css']
})
export class ProcessedDashboardComponent implements OnInit {
 
  displayedColumns: string[] = [ 'RegistrationNo', 'FarmerName', 'FarmAddress', 'State','Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);
  lands=[];
  display = false;
  disable = true;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {

    this.getAll();
  }

  getAll() {
    this.service.lands().subscribe((res: any) => {
      console.log(res)
      if (res.allLands.length == 0) {
        this.display = false;
      } else {
        this.display = true;

        res.allLands.forEach(element => {
          element['check'] = false;
        });

        ELEMENT_DATA = res.allLands as LandData[];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    setPrice(id){
      this.router.navigate(['/setPrice',id]);
    }
}

export interface LandData {
  check: Boolean;
  FarmerName: string;
  RegistrationNo: number;
  FarmAddress: number;
  State: string;
}

let ELEMENT_DATA: LandData[];


