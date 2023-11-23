import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { InventoryRoutingModule } from './inventory-routing.module';
import {InventoryTechnicalComponent} from "./pages/inventory-technical/inventory-technical.component";
import { InventorySummaryComponent } from './pages/inventory-summary/inventory-summary.component';



@NgModule({
  declarations: [
    InventoryTechnicalComponent,
    InventorySummaryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
