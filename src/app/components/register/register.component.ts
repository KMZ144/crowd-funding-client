import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { imageValidator } from './imageValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errors: any;

  data: FormData = new FormData();
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^(011|012|010)([0-9]+){8}$'),
    ]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl(null, [
      Validators.required,
      imageValidator(2000000,['jpg','jpeg','png'])
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   "^S*(?=S{8,})(?=S*[a-z])(?=S*[A-Z])(?=S*[d])(?=S*[W])S*$"
      // ),
    ]),
    password2: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  get getEmail() {
    return this.form.controls['email'];
  }

  get getPassword() {
    return this.form.controls['password'];
  }

  get isLoggedIn() {
    return this.auth;
  }
  get getUserName() {
    return this.form.controls['username'];
  }

  get getAddress() {
    return this.form.controls['address'];
  }

  get getMobile() {
    return this.form.controls['mobile'];
  }
  get getFirstName() {
    return this.form.controls['firstName'];
  }
  get getLastName() {
    return this.form.controls['lastName'];
  }
  get getImage() {
    return this.form.controls['image'];
  }
  get getPassword2() {
    return this.form.controls['password2'];
  }

  submit(e: Event) {
    console.log(this.form);
    e.preventDefault();
    if (this.form.status == 'VALID') {
      this.data.append('username', this.getUserName.value);
      this.data.append('first_name', this.getFirstName.value);
      this.data.append('last_name', this.getLastName.value);
      this.data.append('email', this.getEmail.value);
      this.data.append('password', this.getPassword.value);
      this.data.append('password2', this.getPassword2.value);
      this.data.append('phone', this.getMobile.value);
      this.data.append('picture', this.getImage.value);
      console.log(this.data);

      this.auth.register(this.data).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
          this.errors = err.error.errors;
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
