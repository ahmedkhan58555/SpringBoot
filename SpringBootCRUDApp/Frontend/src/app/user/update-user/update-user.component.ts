import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  userForm: FormGroup;
  user: User = new User();
  id: number = 0;

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(
      (data) => {
        this.userForm.patchValue({
          emailId: data.emailId,
          password: data.password
        });
      },
      (error) => console.log(error)
    );
  }

  submitForm() {
    if (this.userForm.valid) {
      const user: User = {...this.userForm.value 
      };
      console.log(user);
      this.service.updateUser(this.id, user).subscribe(
        (response) => {
          console.log(response);
          alert('User Updated Successfully');
          this.router.navigate(['/user']);
        },
        (error) => console.log(error)
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
