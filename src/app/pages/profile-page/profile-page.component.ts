import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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

  delete() {
    this.modalService.open(DeleteAccountModalComponent);
  }
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

}
