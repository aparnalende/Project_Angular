import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserserviceService } from '../services/userservice.service';
import { user } from '../User/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    password: '',
    fullName: '',
    email: '',
  };

  userList: user[] = [];

  constructor(private uservObj: UserserviceService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('i am in submit method');
    if (
      (this.user.username === '' || this.user.username === null) &&
      (this.user.password === '' || this.user.password === null) &&
      (this.user.fullName === '' || this.user.fullName === null) &&
      (this.user.email === '' || this.user.email === null)
    ) {
      Swal.fire('All fields are required', '', 'error');
    } else {
      this.uservObj.createUser(this.user).subscribe(
        (data) => {
          Swal.fire('Register', 'user registed successfully', 'success');
          this.route.navigateByUrl('signin');
        },
        (error) => {
          Swal.fire('Username Already Exits', '', 'error');
        }
      );
    }
  }
}
