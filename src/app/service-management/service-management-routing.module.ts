import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from "../shared/pages/layout-page/layout-page.component";
import {HomeUserComponent} from "./pages/home-user/home-user.component";
import {HomeTechnicalComponent} from "./pages/home-technical/home-technical.component";
import {SearchTechnicalComponent} from "./pages/search-technical/search-technical.component";
import {SelectTechnicalComponent} from "./pages/select-technical/select-technical.component";
import {ListOrdersComponent} from "./pages/list-orders/list-orders.component";
import {ListOrdersUserComponent} from "./pages/list-orders-user/list-orders-user.component";
import {ViewOrderUserComponent} from "./pages/view-order-user/view-order-user.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'user',component:HomeUserComponent},
      {path:'technical',component:HomeTechnicalComponent},
      {path:'user/technical',component:SearchTechnicalComponent},
      {path:'user/technical/:id',component:SelectTechnicalComponent},
      {path:'technician/task',component:ListOrdersComponent},
      {path:'user/task',component:ListOrdersUserComponent},
      {path:'user/task/:id',component:ViewOrderUserComponent},
      {path:'**',redirectTo:'user'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceManagementRoutingModule { }
