import { Routes } from '@angular/router';
import { LoginPage } from './auth/login/login';
import { HomePage } from './layout/home/home';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'home', component: HomePage }
];
