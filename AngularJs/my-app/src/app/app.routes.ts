import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MasterComponent } from './home/master/master.component';

function redirectBasedOnAuth(authService: AuthService) {
  return authService.isAuthenticated() ? 'home' : 'login';
}

export const routes: Routes = [
  // { path: 'login', component: LoginUserComponent },
  {
    path: '', component: MainComponent, canActivate: [authGuard],
    children: [
      {
        path: '', component: HomeComponent,
        children: [
          {path: 'home/dashboard', component: DashboardComponent},
          {path: 'home/master', component: MasterComponent}
        ]
      }
    ]
  },{
    path:'login',component:LoginUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }