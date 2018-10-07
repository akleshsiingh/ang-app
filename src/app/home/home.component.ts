import { AuthService } from './../service/authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService,private route: Router) { }

  ngOnInit() {
  }

  submit() {
    this.route.navigate(['/followers'],{
      queryParams:{ page: 2, sort : 'latest'}
    })
  }
  onLogin(){
    this.route.navigate(['/login']);
  }
  onLogout(){
    this.auth.logout()
    this.route.navigate(['/login']);
  }
}
