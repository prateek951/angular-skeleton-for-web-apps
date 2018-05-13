import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    
   }

  ngOnInit() {
    //Login template pending for now
  }

  onSubmit(){
    this.authService.loginUser({
      email : this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

}
