import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.css']
})
export class DeleteAccountModalComponent implements OnInit {

  submitted: boolean = false;

  deleteAccountForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  get f() {
    return this.deleteAccountForm.controls;
  }
  confirm() {
    this.submitted = true;
    if (this.deleteAccountForm.invalid) {
      return;
    }
    
    alert(this.deleteAccountForm.get("name")?.value + "  is deleted !");
    this.activeModal.close('Cross click');
  }
  constructor(
    public activeModal: NgbActiveModal
  ) { }


  ngOnInit(): void {
  }

}
