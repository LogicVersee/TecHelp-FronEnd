import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchTechnicalComponent} from "./views/search-technical/search-technical.component";
import {TechProfileComponent} from "./views/tech-profile/tech-profile.component";

const routes: Routes = [
  {path: 'searchTechnicals', component: SearchTechnicalComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'techProfile/:id', component: TechProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
