import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot
} from '@angular/router';
import {AuthService} from '../services/auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private auth: AuthService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('guard');
    return this.auth.isLogin;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('guard');
    return this.canActivate(next, state);
  }
}
