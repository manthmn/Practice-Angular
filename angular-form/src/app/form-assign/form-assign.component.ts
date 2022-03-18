import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assign',
  templateUrl: './form-assign.component.html',
  styleUrls: ['./form-assign.component.css']
})
export class FormAssignComponent implements OnInit {

  @ViewChild('f', {static: true}) signupForm: NgForm;
  defaultSubs = 'advanced';
  isSubmit = false;
  formData = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formData.email = this.signupForm.value.email;
    this.formData.subscription = this.signupForm.value.subscription;
    this.formData.password = this.signupForm.value.password;
    this.isSubmit = true;
    this.signupForm.reset();
  }

}
