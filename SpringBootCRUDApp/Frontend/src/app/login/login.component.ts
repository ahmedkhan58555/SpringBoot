import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  loginData = { emailId: '', password: '' }; 
  errorMessage: string | null = null;
  showAlert: boolean = false;
  alertMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData.emailId, this.loginData.password).subscribe({
      next: (token: string) => {
        this.authService.saveToken(token); 
        this.showAlert = true; 
        this.alertMessage = 'You have successfully logged in!'; 
        this.router.navigate(['/dashboard']); 
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid email or password. Please try again.';  
        this.showAlert = true; // Show alert for error
        this.alertMessage = 'Login failed. Invalid email or password | Please try again.'; 
                setTimeout(() => {
          this.showAlert = false; // Hide alert after delay
        }, 3000);
      }
    });
  }
  navigateToSignup() {
    this.router.navigate(['/signup']); 
  }
}


