import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  landDetails:any;
  constructor(private http:HttpClient) { }

   lands(){
    return this.http.get("http://localhost:3000/allLands");
  }

  getlandbyId(data){
    return this.http.get("http://localhost:3000/getLandById/"+data)
    .pipe(
      map((data)=>{
      this.landDetails =data;
       return data;
    }))
  }

  getlandDetails(){
    return this.landDetails;
  }

  land_register(data){
    console.log(data);
    return this.http.post("http://localhost:3000/landregistration",data)
  }

  login(data:any){
    return this.http.post("http://localhost:3000/login",data)
  }

  registration(data:any){
    return this.http.post("http://localhost:3000/registration",data)
  }

  cultivate(data){
    return this.http.post("http://localhost:3000/startcultivation",data);
  }

  cutivateDetails(id){
    return this.http.get("http://localhost:3000/getCultivationDetails/"+id);
  }

  harvest(data){
    return this.http.post("http://localhost:3000/performharvest",data)
  }
  harvestDetails(id){
    return this.http.get("http://localhost:3000/getHarvestDetails/"+id)
  }

}
