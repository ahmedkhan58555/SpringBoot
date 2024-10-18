import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employees.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class DashboardComponent implements OnInit {
  employees: Employee[] = []; // to hold employees data
  filteredEmployees: Employee[] = []; // to hold filtered employees data
  searchTerm: string = ''; // to hold search term

  
  constructor(
    private authService: AuthService, 
    private employeeService: EmployeeService, 
    private router: Router) {}

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
      this.getEmployees();
    }
  }

  isTokenExpired(jwtToken: string): boolean {
    const decoded: any = jwtDecode(jwtToken);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (response) => {
        console.log(response);
        this.employees = response;
        this.filteredEmployees = response; // initialize filtered employees
      },
      (error) => console.log(error)
    );
  }


  filterEmployees() {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filteredEmployees = this.employees.filter(employee =>
        employee.firstName?.toLowerCase().includes(term) ||
        employee.lastName?.toLowerCase().includes(term) ||
        employee.gender?.toLowerCase().includes(term) ||
        employee.designation?.toLowerCase().includes(term) ||
        employee.department?.departmentName.toLowerCase().includes(term) ||
        employee.location?.city.toLowerCase().includes(term) ||
        employee.location?.country.toLowerCase().includes(term) ||
        employee.age?.toString().includes(term) || // Assuming age is a number
        new Date(employee.doj).toLocaleDateString().includes(term) // Format Date to string for comparison
      );
    } else {
      this.filteredEmployees = this.employees; // Reset to all employees if search term is empty
    }
    console.log('Filtered employees:', this.filteredEmployees); // For debugging
  }



  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      alert('Employee deleted successfully');
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  createEmployee() {
    this.router.navigate(['create-employee']);
  }




  //logout button
  logout(): void {
    this.authService.logout();   
}

redirect(): void {
  this.router.navigate(['/user']);  
}

}



