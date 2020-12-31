import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {AuthorizationModule} from './pages/authorization/authorization.module';

import {ComponentsModule} from './components/components.module';
import { TestRoutComponent } from './test-rout/test-rout.component';
import {MainPageModule} from './pages/main-page/main-page.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './Guards/auth.guard';
import {StashModule} from './pages/stash/stash.module';



@NgModule({
  declarations: [
    AppComponent,
    TestRoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AuthorizationModule,
    MainPageModule,
    ComponentsModule,
    HttpClientModule,
    StashModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
