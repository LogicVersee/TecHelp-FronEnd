import { NgModule } from '@angular/core';



import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatButtonModule } from '@angular/material/button';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from "@angular/material/select";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UserSidenavComponent } from './components/user-sidenav/user-sidenav.component';
import { TechnicalSidenavComponent } from './components/technical-sidenav/technical-sidenav.component';
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    PageNotFoundComponent,

    LayoutPageComponent,
    UserSidenavComponent,
    TechnicalSidenavComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  exports: [

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatLegacyChipsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatMenuModule,

    MatSortModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,


  ]
})
export class SharedModule { }
