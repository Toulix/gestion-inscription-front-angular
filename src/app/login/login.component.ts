import { NotifierService } from 'angular-notifier';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  loginFormGroup: FormGroup;
  loading = false;
  
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private notifier: NotifierService) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  })}


  login() {
    this.loading = true;
    this.authService.singIn(this.loginFormGroup.value)
      .subscribe(result => {
        console.log(result);
        if(result) {
          this.loading = false;
          this.router.navigate(['/home'])
        }
      }, error => {
        this.invalidLogin = true;
        this.loading = false;
      }
      )
  }


}
