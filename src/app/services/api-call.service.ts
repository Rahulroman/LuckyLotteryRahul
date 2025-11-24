import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

constructor(private http: HttpClient){}

baseUrl : string = "https://api.freeprojectapi.com/api/BusBooking/";

post(endpoint: string , body: any): Observable<any> {
  console.log(endpoint , body );
    return this.http.post(this.baseUrl + endpoint , body);
}



}
