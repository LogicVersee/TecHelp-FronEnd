import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EditProfileTechnicalComponent} from "./pages/edit-profile-technical/edit-profile-technical.component";
import {LayoutPageComponent} from "../shared/pages/layout-page/layout-page.component";


const routes: Routes = [
  {path:'',
    component: LayoutPageComponent,
    children: [
      {path: 'edit-technical',component: EditProfileTechnicalComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
