import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page.component';
import {MainComponent} from '../../components/main/main.component';
import {AuthGuard} from '../../Guards/auth.guard';

const Routs: Routes = [
  {path: 'main', component: MainComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'MainPage', pathMatch: 'full'},
      {path: 'MainPage', component: MainPageComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(Routs)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
