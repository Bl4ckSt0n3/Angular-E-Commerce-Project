import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers:[
    LoginService,
    HttpClient,
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService, 
    private toastr: ToastrService
    // private formBuilder: FormBuilder
    ) { }

  loading = false;
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
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.loginService.login(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value).pipe(first()).subscribe(
        (success: any) => {
          console.log(success);
          if(success.statusCode === 200) {
            const token = success.data.token;
            localStorage.setItem("jwt", token);
            console.log(token);
            this.router.navigate(['/products']);
          }
        },
        (error: any) => {
          // console.log(error);
          this.toastr.error("Invalid email or password !", "Error");
        }
      );
    }, 1500);
    if (this.loginForm.invalid) {
      return;
    }
    
    // localStorage.setItem("currentUser", "user");
    
  }

  // loginForm!: FormGroup ;
  ngOnInit(): void {
      // this.loginForm = this.formBuilder.group({
      //   email: new FormControl('', [Validators.required, Validators.email]),
      //   password: new FormControl('', [Validators.required]),
      // });
      
  }

}
