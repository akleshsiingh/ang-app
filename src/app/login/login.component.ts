import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../service/authservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private aRoute: ActivatedRoute) { }

  get email() {
   return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
   }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  onSubmit() {
    const returnUrl = this.aRoute.snapshot.queryParamMap.get('returnUrl');
    console.log('submitted ', this.email);
    this.auth.login('');

    this.router.navigate([returnUrl || '']);

  }

}
