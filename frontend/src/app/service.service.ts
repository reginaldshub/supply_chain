import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // land_register(data){
  //   // const httpoption={'content-type':'application/json'}
  //   console.log(data);
  //   return this.http.post("http://localhost:3000/landregistration",data);
  // }

  login(data:any){
    return this.http.post("http://localhost:3000/login",data)
  }

  registration(data:any){
    return this.http.post("http://localhost:3000/registration",data)
  }
  
}
