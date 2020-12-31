import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StashComponent } from './stash.component';
import {ComponentsModule} from '../../components/components.module';



@NgModule({
  declarations: [StashComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class StashModule { }
