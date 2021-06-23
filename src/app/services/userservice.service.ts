import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../User/User';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  baseUrl: string = 'http://localhost:8080';
  sessionUser: any;
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

  public isUserLogin(): boolean {
    let localuser = sessionStorage.getItem('user');
    console.log(localuser)
    if (localuser != null || localuser != undefined) {
      return true;
    } else {
      return false;
    }
  }

  public setUserSession(user: user) {
    let userdata = JSON.stringify(user);
    sessionStorage.setItem('user', userdata);
  }

  public getUserFromSessionStorage(): user {
    this.sessionUser = sessionStorage.getItem('user');
    let userObject = JSON.parse(this.sessionUser);
    return userObject;
  }
  public logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.clear();
  }
}
