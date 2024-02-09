import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class APIUserService {
  // Local NodeJS Rest API 
  private restApiNodeJS = "http://localhost:3000/users" 
  // jsonplaceholder end-points
  private restApiJsonplaceholder = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUsersRestApiNodeJS(): Observable<User[]> {
    return this.http.get<User[]>(`${this.restApiNodeJS}`);
  }
}
