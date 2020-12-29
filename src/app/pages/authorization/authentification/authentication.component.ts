import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public login: string;
  public password: string;

  options: FormGroup;
  colorControl = new FormControl('accent');
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  constructor(fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

  public Login(): void {
    this.authService.login(this.login, this.password);
  }

  public navToReg(): void{
    this.router.navigate(['/authorization/registration']);
  }
}
