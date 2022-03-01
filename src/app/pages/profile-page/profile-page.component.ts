import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DeleteAccountModalComponent } from './delete-account-modal/delete-account-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileInfoForm = new FormGroup({
    email: new FormControl('test@test.com', [Validators.required]),
    password: new FormControl('mypassword', [Validators.required]),
    name: new FormControl('myname', [Validators.required]),
    lastName: new FormControl('mylastname', [Validators.required]),
    address1: new FormControl('myaddress', [Validators.required]),
    address2: new FormControl('myaddress2', [Validators.required]),
    phoneNumber: new FormControl('123456789', [Validators.required]),
    city: new FormControl('mycity', [Validators.required]),
    state: new FormControl('mystate', [Validators.required]),
    country: new FormControl('mycountry', [Validators.required]),
    zip: new FormControl('35200', [Validators.required]),
  });

  isOk: boolean = false;
  isAlert: boolean = false;
  change() {
    this.isOk = true;
    this.isAlert = true;
    this.toastr.warning("You are about to change informations !", "Update form activated !");
  }
  delete() {
    this.modalService.open(DeleteAccountModalComponent);
  }
  close() {
    this.isAlert = false;
  }
  cancel() {
    this.isOk = false;
    this.isAlert = false;
  }
  message: string = "You are about to change your profile informations !\nOnce you update then information will be changed !";
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isAlert = false
    }, 6000);
  }

}
