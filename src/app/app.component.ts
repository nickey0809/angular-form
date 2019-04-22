import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')  signupForm:NgForm;
  defaulQuestion="teacher";
  defaultGender="male";
  answer = '';
  genders: string[]=['male', 'female'];
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({//setValue: overwrite the whole form
    //   userData:{username:suggestedName,
    //   email:''
    // },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({//patchvalue: overwrite part of the form
      userData:{
        username:suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
