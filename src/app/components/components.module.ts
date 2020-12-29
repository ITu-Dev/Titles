/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MainComponent} from './main/main.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';


const MAT_MODULES = [
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatListModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatMenuModule,
];

const CUSTOM_COMPONENTS = [
  SideMenuComponent,
  MainComponent
];
@NgModule({
  declarations: [
    SideMenuComponent,
    MainComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    SideMenuComponent,
    CardComponent,
    CardsComponent,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MainComponent
  ],

})
export class ComponentsModule { }
