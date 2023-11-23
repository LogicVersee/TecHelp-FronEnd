import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryTechnicalComponent} from "./pages/inventory-technical/inventory-technical.component";
import {InventorySummaryComponent} from "./pages/inventory-summary/inventory-summary.component";
import {LayoutPageComponent} from "../shared/pages/layout-page/layout-page.component";

const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children:[
    {path: 'summary', component: InventorySummaryComponent},
    {path: 'summary/items', component: InventoryTechnicalComponent},
    {path:'**',redirectTo:'summary'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
