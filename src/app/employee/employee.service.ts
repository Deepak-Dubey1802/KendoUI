import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {employee} from '../Model/EmployeeModel'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  apiUrl: string = "https://localhost:7107/api/Emp"

  url="https://localhost:7107/api/Emp";


  constructor(private http:HttpClient) { }




  // add employee

  addsignup(add: employee): Observable<employee> {

    return this.http.post<employee>(this.url, add);
  }






  


  getEmployee(): Observable<employee[]> {

    return this.http.get<employee[]> (this.apiUrl);
  }



  // addEmployee(firstname: string, lastname: string, gender: string, designation: string, salary: number,  email: string, city: string): Observable<employee> {
    

  //   // var data = {
      
  //   //   firstname: firstname,
  //   //   lastname: lastname,
  //   //   gender: gender,
  //   //   designation: designation,
  //   //   salary: salary,
  //   //   email: email,
  //   //   city: city
  //   // }

  //   return this.http.post<employee> (this.apiUrl, data);
  // }
  addEmployee(data:any): Observable<employee> {
    

    // var data = {
      
    //   firstname: firstname,
    //   lastname: lastname,
    //   gender: gender,
    //   designation: designation,
    //   salary: salary,
    //   email: email,
    //   city: city
    // }

    return this.http.post<employee> (this.apiUrl, data);
  }


  updateEmployee (employeeid: number, firstname: string, lastname: string, gender: string, designation: string, salary: number,  email: string, city: string): Observable<employee> {
    
    var data = {
      employeeid: employeeid,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      designation: designation,
      salary: salary,
      email: email,
      city: city
    }
    
    return this.http.put<employee> (this.apiUrl + '?employeeid=' + data.employeeid, data);
  }



  deleteEmployee(data:employee) :Observable<employee> {

    return this.http.delete<employee> (this.apiUrl + "?employeeid=" + data.employeeid);
  }
  
}





// url ="https://localhost:7107/api/Emp";

// url2 ="https://localhost:7107/api/Emp";

// url3 ="https://localhost:7107/api/Emp";

// url4 ="https://localhost:7107/api/Emp";




// constructor(private http:HttpClient) { }


// allemployee():any
// {
//   return this.http.get(this.url)
// }

// postaddemployee(send:any)
// {
//   return this.http.post<any>(this.url2,send)
// }


// putupdateemployee(send:any):any
// {
//   return this.http.put<any>(this.url3,send)
// }



// deleteemployee(send:any)
// {
//   return this.http.delete(this.url4)
// }
