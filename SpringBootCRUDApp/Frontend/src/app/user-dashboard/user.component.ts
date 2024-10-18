
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  users: User[] = []; // to hold users data
  filteredUsers: User[] = []; // to hold filtered users data
  searchTerm: string = ''; // to hold the search term

  constructor(
    private authService: AuthService, 
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token || this.isTokenExpired(token)) {
      console.log(
        'Token is either missing or expired. Redirecting to login...'
      );
      this.router.navigate(['/login']);
    } else {
      this.getUsers();
    }
  }

  isTokenExpired(jwtToken: string): boolean {
    const decoded: any = jwtDecode(jwtToken);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response; // Initialize all users
        this.filteredUsers = response; // Initialize filtered users
      },
      (error) => console.log(error)
    );
  }

  // Method to filter users based on the search term
  filterUsers() {
    console.log('Filtering users with search term:', this.searchTerm);
    this.filteredUsers = this.users.filter(user =>
      user.emailId?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Filtered users:', this.filteredUsers);
  }

  onSearch() {
    this.filterUsers(); // Call the filter function on button click
  }

  updateUser(id: number) {
    this.router.navigate(['update-user', id]);
  }

 
  deleteUser(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      alert('User deleted successfully');
      this.getUsers();
    });
  }

  createUser() {
    this.router.navigate(['/signup']);
  }

  redirect(): void {
    this.router.navigate(['/dashboard']);  
  }
}