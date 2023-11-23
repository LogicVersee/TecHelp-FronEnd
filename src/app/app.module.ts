import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {SecurityModule} from "./security/security.module";
import {InventoryModule} from "./inventory/inventory.module";



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SecurityModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
