import { Component, HostListener, inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginUserComponent } from "./login-user/login-user.component";
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
// import { CommonModule } from '@angular/common';
// import { collection, Firestore, getDocs } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LoginUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'my-app'

  constructor() {

    
  }
  ngOnInit(): void {


  }
  



}
