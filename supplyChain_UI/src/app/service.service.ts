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
     var key =localStorage.getItem("email"); 
    return this.http.get("http://localhost:3000/farmer/getLandsByFarmerEmail/"+key);
  }

  getLandsForInspection(){
    return this.http.get("http://localhost:3000/inspector/getLandsForInspection");
  }

  InspectionReport(data){
    return this.http.post("http://localhost:3000/inspector/inspectionReport",data);
  }

  getlandbyId(data){
    return this.http.get("http://localhost:3000/farmer/getLandById/"+data)
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
    return this.http.post("http://localhost:3000/farmer/landregistration",data)
  }
  getUserProfile(data){
    return this.http.get("http://localhost:3000/getUserProfile/"+data); 
  }
  
  login(data:any){
    return this.http.post("http://localhost:3000/login",data)
  }

  registration(data:any){
    return this.http.post("http://localhost:3000/registration",data)
  }

  cultivate(data){
    return this.http.post("http://localhost:3000/farmer/startcultivation",data);
  }

  cutivateDetails(id){
    return this.http.get("http://localhost:3000/farmer/getCultivationDetails/"+id);
  }

  harvest(data){
    return this.http.post("http://localhost:3000/farmer/performharvest",data)
  }
  
  harvestDetails(id){
    return this.http.get("http://localhost:3000/farmer/getHarvestDetails/"+id)
  }
 
  process(data){
    return this.http.post("http://localhost:3000/processAgent/createPackage",data)
  }

  setPrice(price,id){
    return this.http.post("http://localhost:3000/processAgent/updatePackagePrice/"+id,price)
  }

  getLandByProcessAgent(id){
   
    return this.http.get("http://localhost:3000/processAgent/getLandByProcessAgent/"+id)
  }

  getharvestedlands(){
    return this.http.get("http://localhost:3000/processAgent/getLandsForProcessAgent/");
  }

  getpackages(){
    var email =localStorage.getItem("email");
    return this.http.get("http://localhost:3000/processAgent/getPackage/"+email);
  }

  getpackagebyId(id){
    return this.http.get("http://localhost:3000/processAgent/getPackages/"+id);
  }


  transfer(data){
    return this.http.post("http://localhost:3000/processAgent/transferPackage/",data)
  }

  getTransferedPackages(data){
    return this.http.post("http://localhost:3000/retailAgent/getTransferredPackages/",data)
  }

}
