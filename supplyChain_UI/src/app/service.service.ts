import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, tap } from 'rxjs/operators'
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  landDetails:any;
  constructor(private http:HttpClient) { }


  lands(){
     var key =localStorage.getItem("email");   
    return this.http.get(`${environment.farmerUrl}/getLandsByFarmerEmail/`+key);
  }

  cultivate(data){
    return this.http.post(`${environment.farmerUrl}/startcultivation`,data);
  }

  cutivateDetails(id){
    return this.http.get(`${environment.farmerUrl}/getCultivationDetails/`+id);
  }

  harvest(data){
    return this.http.post(`${environment.farmerUrl}/performharvest`,data)
  }
  
  harvestDetails(id){
    return this.http.get(`${environment.farmerUrl}/getHarvestDetails/`+id)
  }

  land_register(data){
    return this.http.post(`${environment.farmerUrl}/landregistration`,data)
  }

  getlandbyId(data){
    return this.http.get(`${environment.farmerUrl}/getLandById/`+data)
    .pipe(
      map((data)=>{
      this.landDetails =data;
       return data;
    }))
  }

  getLandsForInspection(){
    return this.http.get(`${environment.inspectorUrl}/getLandsForInspection`);
  }

  InspectionReport(data){
    return this.http.post(`${environment.inspectorUrl}/inspectionReport`,data);
  }



  getlandDetails(){
    return this.landDetails;
  }

 
  getUserProfile(data){
    return this.http.get(`${environment.creditials}/getUserProfile/`+data); 
  }
  
  login(data:any){
    return this.http.post(`${environment.creditials}/login`,data)
  }

  registration(data:any){
    return this.http.post(`${environment.creditials}/registration`,data)
  }


 
  process(data){
    return this.http.post(`${environment.procesAgentUrl}/createPackage`,data)
  }

  setPrice(price,id){
    return this.http.post(`${environment.procesAgentUrl}/updatePackagePrice/`+id,price)
  }

  getLandByProcessAgent(id){
   
    return this.http.get(`${environment.procesAgentUrl}/getLandByProcessAgent/`+id)
  }

  getharvestedlands(){
    return this.http.get(`${environment.procesAgentUrl}/getLandsForProcessAgent/`);
  }

  getpackages(){
    var email =localStorage.getItem("email");
    return this.http.get(`${environment.procesAgentUrl}/getPackage/`+email);
  }

  getpackagebyId(id){
    return this.http.get(`${environment.procesAgentUrl}/getPackages/`+id);
  }


  transfer(data){
    return this.http.post(`${environment.procesAgentUrl}/transferPackage/`,data)
  }

  getTransferedPackages(data){
    return this.http.post(`${environment.retailAgentUrl}/getTransferredPackages/`,data)
  }

}
