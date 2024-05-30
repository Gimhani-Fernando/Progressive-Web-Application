import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailCtrl: FormControl; 
  passwordCtrl: FormControl;
  loginFormGroup: FormGroup; 

  constructor(private router: Router) {
    this.emailCtrl = new FormControl('gimhanif44@gmail', [
      Validators.required, 
      Validators.email,
    ]);

    this.passwordCtrl = new FormControl('passCCord1@2#', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.loginFormGroup = new FormGroup({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }
  onLogin() {
    console.log(this.loginFormGroup.value)
    this.router.navigate(['/admin']);
  }
}
