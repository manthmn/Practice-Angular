import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signupForm: NgForm;
  defaultQuestion = "pet";
  answer = '';
  isSubmit = false;
  formData = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: ''
  };
  genders = ['male', 'female'];
  

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      username: suggestedName
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value)
  // }
  onSubmit(){
    this.formData.username = this.signupForm.value.username;
    this.formData.email = this.signupForm.value.email;
    this.formData.secretQuestion = this.signupForm.value.secret;
    this.formData.answer = this.signupForm.value.questionAnswer;
    //console.log(this.signupForm);
    this.isSubmit = true;
    this.signupForm.reset();
  }
}
