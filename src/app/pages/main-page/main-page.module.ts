import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {ComponentsModule} from '../../components/components.module';




@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ComponentsModule,
  ]
})
export class MainPageModule { }
