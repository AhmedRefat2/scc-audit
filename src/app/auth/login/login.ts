import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  login() {
    this.isLoading = true;
    // simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Login Success');
    }, 2000);
  }
}
