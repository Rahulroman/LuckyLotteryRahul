import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http : HttpClient) {}

// obj = 
//   {
//   "userId": 0,
//   "userName": "rahul",
//   "emailId": "string",
//   "fullName": "string",
//   "role": "string",
//   "createdDate": "2025-11-23T14:54:46.897Z",
//   "password": "123",
// }

url : string ="";

post_api( obj1 : User ){

  console.log("api call " + obj1.email);
  return this.http.post("https://api.freeprojectapi.com/api/BusBooking/AddNewUser" , obj1 );

}


}
