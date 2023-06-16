import { Injectable } from '@angular/core';
import { login } from './signup/Model/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LoginempService {


  url="https://localhost:7107/api/Login";

  constructor(private http:HttpClient) { }

  loginur(add: login): Observable<login> {

    return this.http.post<login>(this.url, add);
  }



}
