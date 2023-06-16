import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signup } from './Model/signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupempService {

   url="https://localhost:7107/api/employee";


  constructor(private http:HttpClient) { }


  
  addsignup(add: signup): Observable<signup> {

    return this.http.post<signup>(this.url, add);
  }


 







  
}
