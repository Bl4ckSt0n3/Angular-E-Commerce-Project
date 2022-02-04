import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: boolean = false;

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;

    // if(this.registerForm.invalid) {
    //   return;
    // }

    this.toastr.success('Kullanıcı Oluşturuldu!', 'Yeni Kullanıcı!');
    // try {
    //   console.log("registered !");
    //   this.toastr.success('Hello world!', 'Toastr fun!');
    // }catch (err) {
    //   this.toastr.error("not registered")
    // }


  }

  cancel() {
    this.router.navigate(['/home'])
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      //name:  new FormControl('',{ updateOn: 'blur', validators: [Validators.required]}),
      name:  new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required) ,
      zip: new FormControl('', Validators.required),
    });
  }

}
