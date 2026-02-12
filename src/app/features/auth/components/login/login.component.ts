import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router'; // 1. Added Router import

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: LoginForm = {
    email: '',
    password: ''
  };

  // 2. Inject Router in the constructor
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login submitted:', this.loginForm);
    
    // 3. Logic to redirect after successful login
    if (this.isFormValid()) {
      // Directs user to the 'home' path inside your DashboardLayout
      this.router.navigate(['/home']);
    }
  }

  onGoogleLogin() {
    console.log('Google login clicked');
    // For demo purposes, you can also redirect here
    this.router.navigate(['/home']);
  }

  isFormValid(): boolean {
    return !!this.loginForm.email.trim() && this.loginForm.password.length >= 6;
  }
}