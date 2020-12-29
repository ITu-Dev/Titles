import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentification/authentication.component';
import {RegistrationComponent} from './registration/registration.component';


const Routs: Routes = [
  {path: 'authorization', children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'authentication', component: AuthenticationComponent},
      {path: '', redirectTo: 'authentication', pathMatch: 'full'}
    ]},
  {path: '', redirectTo: 'authentication', pathMatch: 'full'},
 // {path: 'authorization', redirectTo: 'authorization/authentication', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(Routs)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
