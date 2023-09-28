import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchTechnicalComponent} from "./views/search-technical/search-technical.component";
import {TechProfileComponent} from "./views/tech-profile/tech-profile.component";
import {HomeComponent} from "./components/home/home.component";
import {RequestComponent} from "./components/request/request.component";

const routes: Routes = [
  {path: 'searchTechnicals', component: SearchTechnicalComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'techProfile/:id', component: TechProfileComponent},
  {path: 'request', component: RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
