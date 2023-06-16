import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {employee} from '../Model/EmployeeModel'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AddempService {

  
  url="https://localhost:7107/api/Emp";


  constructor(private http:HttpClient) { }


  
  addsignup(add: employee): Observable<employee> {

    return this.http.post<employee>(this.url, add);
  }

  
}
