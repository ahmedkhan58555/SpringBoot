import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Department } from '../model/department';
import { Location } from '../model/location';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.httpClient.get<User[]>(this.userUrl, { headers });
    } else {
      console.error('Authorization token is missing.');
      return new Observable((observer) => {
        observer.error('Authorization token is missing.');
      });
    }
  }

  getUserById(id: number): Observable<User> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.httpClient.get<User>(`${this.userUrl}/${id}`, {
        headers,
      });
    } else {
      console.error('Authorization token is missing.');
      return new Observable((observer) => {
        observer.error('Authorization token is missing.');
      });
    }
  }

  updateUser(id: number, user: User): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.httpClient.put(`${this.userUrl}/${id}`, user, {
        headers,
      });
    } else {
      console.error('Authorization token is missing.');
      return new Observable((observer) => {
        observer.error('Authorization token is missing.');
      });
    }
    return this.httpClient.put(`${this.userUrl}/${id}`, user);
  }


  deleteUser(id: number): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    if (headers) {
      return this.httpClient.delete(`${this.userUrl}/${id}`, { headers });
    } else {
      console.error('Authorization token is missing.');
      return new Observable((observer) => {
        observer.error('Authorization token is missing.');
      });
    }
  }

 createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      console.log('Token found');
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log('Token not found');
      return null;
    }
  }

}
