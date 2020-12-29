import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UserInterface} from '../interfaces/user.interface';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$ = new Subject<UserInterface>();
  constructor(private authService: AuthService,
              private router: Router) {}

 /* public setUser(login: string, password: string): void{

    this.authService.login(login, password).subscribe((response: any) => {
      this.user$.next(response.signedUser);
      localStorage.setItem('auth_token', response.token);
      this.router.navigate(['main']);
    });
  }*/
}
