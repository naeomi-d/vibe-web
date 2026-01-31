import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Fixed: loginForm instead of formData to match ngModel names
  loginForm = {
    email: '',
    password: ''
  };

  onSubmit(): void {
    console.log('Login submitted:', this.loginForm);
    // TODO: Auth service → dashboard
  }

  onGoogleLogin(): void {
    console.log('Google OAuth clicked');
    // TODO: Google OAuth
  }

  isFormValid(): boolean {
    return this.loginForm.email.trim() !== '' && 
           this.loginForm.password.length >= 6;
  }
}
