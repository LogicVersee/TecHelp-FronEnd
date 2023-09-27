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
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { TechProfileComponent } from './views/tech-profile/tech-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MatMenuModule } from '@angular/material/menu';

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
    HomeComponent
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
    MatMenuModule
  ],
  providers: [TechnicalsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//added dependencies
