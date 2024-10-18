import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SignupComponent {
  signupData = { emailId: '', password: '' }; // Define the data model
  successMessage: string = '';
  errorMessage: string = '';


  constructor(private authService: AuthService, private router: Router) {}
  onSignup() {
    this.authService.signup(this.signupData.emailId, this.signupData.password).subscribe(
      (response) => {
        console.log('Signup successful!', response);
        this.successMessage = 'Signup successful! You can now log in.';
        this.errorMessage = ''; // Clear any previous error messages
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login page after 3 seconds
        }, 3000); // Delay before redirecting
      },
      (error) => {
        console.error('Signup failed!', error);
        this.errorMessage = 'Signup failed! Please try again.';
        this.successMessage = ''; // Clear any previous success messages
      }
    );
  }
}