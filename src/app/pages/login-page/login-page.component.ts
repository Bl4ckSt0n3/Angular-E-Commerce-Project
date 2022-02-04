import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    // private formBuilder: FormBuilder
    ) { }

  submitted: boolean = false;
  // , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  
  
  get f() {
    return this.loginForm.controls;
  }

  login() {
    // window.location.reload();
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/products'])
  }

  // loginForm!: FormGroup ;
  ngOnInit(): void {
      // this.loginForm = this.formBuilder.group({
      //   email: new FormControl('', [Validators.required, Validators.email]),
      //   password: new FormControl('', [Validators.required]),
      // });
      
  }

}
