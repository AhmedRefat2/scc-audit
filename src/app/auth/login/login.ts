import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage {

  userName: string = '';
  password: string = '';
  showPassword: boolean = false;

  isLoading: boolean = false;
  errorMessage: string = '';
  
  
  constructor(private router: Router) {}
  login() {
    this.errorMessage = '';
    this.isLoading = true;

    // Fake login (stub)
    setTimeout(() => {
      this.isLoading = false;

      // أي بيانات = نجاح
      this.router.navigate(['/home']);

    }, 1000);
  }
}
