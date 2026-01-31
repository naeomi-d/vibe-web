import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'  // Fixed: styleUrl not styleUrls
})
export class LoginComponent {
  loginForm: LoginForm = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login submitted:', this.loginForm);
    // TODO: Call your auth service
  }

  onGoogleLogin() {
    console.log('Google login clicked');
    // TODO: Google OAuth
  }

  isFormValid(): boolean {
    return !!this.loginForm.email.trim() && this.loginForm.password.length >= 6;
  }
}
