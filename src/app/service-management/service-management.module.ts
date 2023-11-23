import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManagementRoutingModule } from './service-management-routing.module';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { HomeTechnicalComponent } from './pages/home-technical/home-technical.component';
import {SharedModule} from "../shared/shared.module";
import { SearchTechnicalComponent } from './pages/search-technical/search-technical.component';
import { SelectTechnicalComponent } from './pages/select-technical/select-technical.component';
import { CreateOrderDialogComponent } from './components/create-order-dialog/create-order-dialog.component';
import { CreateRequestDialogComponent } from './components/create-request-dialog/create-request-dialog.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ListOrdersUserComponent } from './pages/list-orders-user/list-orders-user.component';

import { ViewOrderUserComponent } from './pages/view-order-user/view-order-user.component';



@NgModule({
  declarations: [
    HomeUserComponent,
    HomeTechnicalComponent,
    SearchTechnicalComponent,
    SelectTechnicalComponent,
    CreateOrderDialogComponent,
    CreateRequestDialogComponent,
    ListOrdersComponent,
    ListOrdersUserComponent,
    ViewOrderUserComponent
  ],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule,
    SharedModule,
    MatDialogModule,


  ]
})
export class ServiceManagementModule { }
