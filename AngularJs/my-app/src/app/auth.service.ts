import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  constructor(private router:Router,private jwtHelper:JwtHelperService) { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('JWT');  // Clear the token
    this.router.navigate(['login']);  // Redirect to login page
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('JWT');
    return !this.jwtHelper.isTokenExpired(token);  // Check if token is still valid
  }

  getToken() {
    return localStorage.getItem('JWT');
  }
}
