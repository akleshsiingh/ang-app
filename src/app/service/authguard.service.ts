import { AuthService } from './authservice.service';
import { Injectable } from '@angular/core';
import { CanActivate ,Router, RouterStateSnapshot} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){

    if(this.auth.isloggedIn()) return true;

    this.router.navigate(['/login'],
      { queryParams: {returnUrl: state.url}}
    );
  }


}
