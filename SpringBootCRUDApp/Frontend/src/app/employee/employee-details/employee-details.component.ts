import { Component } from '@angular/core';

import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  id: number = 0;
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
  downloadPDF(): void {
    const doc = new jsPDF();

    // Set PDF title
    doc.setFontSize(18);
    doc.text('Employee Details', 10, 10);

    // Add employee details to the PDF
    doc.setFontSize(12);
    if (this.employee) {
      doc.text(`First Name: ${this.employee.firstName}`, 10, 30);
      doc.text(`Last Name: ${this.employee.lastName}`, 10, 40);
      doc.text(`Gender: ${this.employee.gender}`, 10, 50);
      doc.text(`Age: ${this.employee.age}`, 10, 60);
      doc.text(`Date Joined: ${this.employee.doj}`, 10, 70);
      doc.text(`Designation: ${this.employee.designation}`, 10, 80);
      doc.text(`Department: ${this.employee.department?.departmentName}`, 10, 90);
      doc.text(`City: ${this.employee.location?.city}`, 10, 100);
      doc.text(`Country: ${this.employee.location?.country}`, 10, 110);
    }

    // Save the PDF
    doc.save('employee-details.pdf');
  }
}
