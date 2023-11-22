import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManagementRoutingModule } from './service-management-routing.module';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { HomeTechnicalComponent } from './pages/home-technical/home-technical.component';
import {SharedModule} from "../shared/shared.module";
import { SearchTechnicalComponent } from './pages/search-technical/search-technical.component';
import { SelectTechnicalComponent } from './pages/select-technical/select-technical.component';


@NgModule({
  declarations: [
    HomeUserComponent,
    HomeTechnicalComponent,
    SearchTechnicalComponent,
    SelectTechnicalComponent
  ],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule,
    SharedModule
  ]
})
export class ServiceManagementModule { }
