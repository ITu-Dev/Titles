import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentification/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {AuthRoutingModule} from './auth-routing.module';
import {ComponentsModule} from '../../components/components.module';



@NgModule({
  declarations: [AuthenticationComponent, RegistrationComponent],
  exports: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    AuthRoutingModule,
    ComponentsModule
  ]
})
export class AuthorizationModule { }
