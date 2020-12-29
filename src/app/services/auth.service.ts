import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';
import {UserInterface} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth = 'http://localhost:3000/auth';
  private urlReg = 'http://localhost:3000/reg';
  token;
  isLogin = false;
  public user$ = new Subject<UserInterface>();
  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string): void {
    this.http.post(this.urlAuth, {login, password}).subscribe((response: any) => {
      this.user$.next(response.signedUser);
      localStorage.setItem('auth_token', response.token);
      // this.isLogin = true;
      this.router.navigate(['main']);
    });
  }

  registration(login: string, password: string): void{
    this.http.post(this.urlReg, {login, password})
      .subscribe( (resp: any) => console.log(resp));
    this.router.navigate(['/authorization/authentication']);
  }

  public logout(): void {
    this.isLogin = false;
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
