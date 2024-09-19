import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet, ROUTES } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from "../home/dashboard/dashboard.component";
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatMenuModule,
     MatButtonModule, MatIconModule, DashboardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  constructor(private authService:AuthService){

  }
  toggleSidenav(){
    if(this.outlet.component instanceof HomeComponent){
      var home = (this.outlet.component as HomeComponent)
      
      var sidenav = (this.outlet.component as HomeComponent).sidenav
      sidenav.toggle()
    }
  }
  LogOut(){
    this.authService.logout()
  }
}
