import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../model/employee';
import { Department } from '../model/department';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:8080/api/employees';
  private departmentUrl = 'http://localhost:8080/api/departments';
  private LocationUrl = 'http://localhost:8080/api/locations';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.get<Employee[]>(this.employeeUrl, { headers });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }



    createEmployee(employee: Employee): Observable<Object> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.post(`${this.employeeUrl}`, employee, { headers });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }
  
    getEmployeeById(id: number): Observable<Employee> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.get<Employee>(`${this.employeeUrl}/${id}`, {
          headers,
        });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }
  
    updateEmployee(id: number, employee: Employee): Observable<Object> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.put(`${this.employeeUrl}/${id}`, employee, {
          headers,
        });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
      return this.httpClient.put(`${this.employeeUrl}/${id}`, employee);
    }
  
    deleteEmployee(id: number): Observable<Object> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.delete(`${this.employeeUrl}/${id}`, { headers });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }
  
    getDepartments(): Observable<Department[]> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.get<Department[]>(this.departmentUrl, { headers });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }
  
    getLocations(): Observable<Location[]> {
      const headers = this.createAuthorizationHeader();
      if (headers) {
        return this.httpClient.get<Location[]>(this.LocationUrl, { headers });
      } else {
        console.error('Authorization token is missing.');
        return new Observable((observer) => {
          observer.error('Authorization token is missing.');
        });
      }
    }
  

  // Additional employee-related methods can be added here
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
