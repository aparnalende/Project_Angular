import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/adduser`, user);
  }

  public getUserUsingUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/login/${username}`);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/register/displayuser`);
  }
}
