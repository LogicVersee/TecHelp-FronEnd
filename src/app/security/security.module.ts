import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import {SharedModule} from "../shared/shared.module";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class SecurityModule { }
