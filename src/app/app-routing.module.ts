import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestRoutComponent} from './test-rout/test-rout.component';


const Routs: Routes = [
  {path: 'authorization', loadChildren: './pages/authorization/authorization.module#AuthorizationModule'},
  {path: 'mainPage', loadChildren: './pages/main-page/main-page.module#MainPageModule'},
  {path: 'registration', loadChildren: './'},
  {path: 'testRout', component: TestRoutComponent},
  {path: '', redirectTo: 'authorization', pathMatch: 'full'},
  // {path: '**', redirectTo: 'authorization', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(Routs)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
