import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient){}
    

  getProduct(){

    let httpHeaders = new HttpHeaders({
      
    });   
    // return this.httpClient.get("http://localhost:3000/sowing", {headers : httpHeaders})
    
    return this.httpClient.get("http://localhost:3000/sowing")
  }

  addData(data:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/sowing",data)
    
  }
  delateData(id:any):Observable<any>{
    return this.httpClient.delete(`http://localhost:3000/sowing/${id}`)
  }


  getSeeds(){
    return this.httpClient.get("http://localhost:3000/seed")
  }
  addDataSeed(data:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/seed",data)
  }
  delateDataSeed(id:any):Observable<any>{
    return this.httpClient.delete(`http://localhost:3000/seed/${id}`)
  }
}
