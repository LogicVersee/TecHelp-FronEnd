import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchTechnicalComponent} from "./views/search-technical/search-technical.component";
import {TechProfileComponent} from "./views/tech-profile/tech-profile.component";
import {HomeComponent} from "./components/home/home.component";
import {RequestComponent} from "./components/request/request.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";

const routes: Routes = [
  {path: 'searchTechnicals', component: SearchTechnicalComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'techProfile/:id', component: TechProfileComponent},
  {path: 'request', component: RequestComponent},

  {path: 'error404', component: PageNotFoundComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},

  {path: '**', redirectTo: 'error404', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
