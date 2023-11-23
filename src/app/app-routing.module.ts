import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./security/security.module').then(m=>m.SecurityModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./service-management/service-management.module').then(m=>m.ServiceManagementModule)
  },
  {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'',
    redirectTo:'auth/login',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
