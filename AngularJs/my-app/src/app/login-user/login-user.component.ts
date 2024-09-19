import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../Service/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [ReactiveFormsModule,MatCardModule,MatInputModule,MatButtonModule,MatFormFieldModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  userForm: FormGroup;
  constructor(
     private fb: FormBuilder,
     private dataService: DataService,
     private router:Router,
    private authService:AuthService) {
    this.userForm = this.fb.group({
      ID: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  BT_Submit_Click() {
    var username = this.userForm.value.ID
    var password = this.userForm.value.password
    var param = {
      username: username,
      password: password
    }

    this.dataService.Login(param).subscribe(
      {
        next: resp =>{
          localStorage.setItem("JWT",resp.token)
          //var token = resp.headers.get('Set-Cookie')
          this.authService.login();
          this.router.navigate(['/home'])
        } ,
        error: e => {
          window.alert(e.message);
        }
      }
    );
  }

  BT_GetGreen_Click() {
    this.dataService.GetForcast().subscribe(
      {
        next: resp => console.log(resp),
        error: e => {
          window.alert(e.message);
        }
      }
    );
  }
}
