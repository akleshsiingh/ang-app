import { UsernameValidators } from './../validators/username.valodators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({

    account: new FormGroup({
      fname : new FormControl('',Validators.required),
      lname : new FormControl('',Validators.required),
    }),
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      UsernameValidators.cannotContainsSpace
    ],UsernameValidators.shouldBeUnique),

    password: new FormControl('',Validators.required)
    });

  get username() {
    return this.form.get('username');
  }

  onSignUp() {
    console.log('submited')
  }



  }
