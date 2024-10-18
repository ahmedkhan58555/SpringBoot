// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';  
  private signupUrl = 'http://localhost:8080/signup';  

  constructor(private http: HttpClient, private router: Router) {}

  login(emailId: string, password: string): Observable<any> {
    const loginData = { emailId, password };
    return this.http.post(this.loginUrl, loginData, { responseType: 'text' });  
  }

  // Signup method
  signup(emailId: string, password: string): Observable<any> {
    const signupData = { emailId, password };
    return this.http.post(this.signupUrl, signupData); // Adjust responseType if needed
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);  // Save JWT token in localStorage
  }

  // Retrieve the JWT token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Clear the JWT token (for logout)
  clearToken(): void {
    localStorage.removeItem('jwtToken');
  }
  
  logout(): void {
    localStorage.removeItem('jwtToken'); 
    this.router.navigate(['/login']);  
  }
  
}
