import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-process-agent',
  templateUrl: './process-agent.component.html',
  styleUrls: ['./process-agent.component.css']
})
export class ProcessAgentComponent implements OnInit {

  displayedColumns: string[] = ['checked', 'RegistrationNo', 'FarmerName', 'FarmAddress', 'State'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<LandData>(ELEMENT_DATA);
  lands = [];
  display = false;
  disable = true;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {

    this.getAll();
  }

  getAll() {
    this.service.getharvestedlands().subscribe((res: any) => {
      console.log(res)
      if (res.land.length == 0) {
        this.display = false;
      } else {
        this.display = true;
        ELEMENT_DATA = res.land as LandData[];
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


  process() {
    console.log(this.lands);
    this.router.navigate(['process', { lands: this.lands }]);
  }

  checked(registrationNo, check) {
    if (!check) {
      this.lands.push(registrationNo);
    } else if (check) {
      var index = this.lands.indexOf(registrationNo);
      if (index > -1) {
        this.lands.splice(index, 1);

      }
    }
    if (this.lands.length == 0)
      this.disable = true;
    else this.disable = false;
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

