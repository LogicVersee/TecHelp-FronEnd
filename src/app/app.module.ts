import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { SearchTechnicalComponent } from './views/search-technical/search-technical.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SideNavToolBarComponent } from './components/side-nav-tool-bar/side-nav-tool-bar.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {TechnicalsServiceService} from "./services/technicals-service.service";
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RequestComponent } from './components/request/request.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { TechProfileComponent } from './views/tech-profile/tech-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from "@angular/material/select";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TasksComponent } from './tasking/pages/tasks/tasks.component';
import {TasksService} from "./tasking/services/tasks.service";
import { TaskFormComponent } from './tasking/components/task-form/task-form.component';

import { ViewTasksComponent } from './tasking/pages/view-tasks/view-tasks.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationComponent,
    RequestComponent,
    ToolbarComponent,
    SearchTechnicalComponent,
    SidebarComponent,
    SideNavToolBarComponent,
    TechProfileComponent,
    ToolbarComponent,
    NavigationComponent,
    HomeComponent,
    TasksComponent,
    TaskFormComponent,
    ViewTasksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    HttpClientModule,
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
    FormsModule
  ],
  providers: [TechnicalsServiceService,TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//added dependencies
