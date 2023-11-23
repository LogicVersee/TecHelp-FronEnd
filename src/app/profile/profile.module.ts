import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileTechnicalComponent } from './pages/edit-profile-technical/edit-profile-technical.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    EditProfileTechnicalComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
