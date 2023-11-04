import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchTechnicalComponent} from "./views/search-technical/search-technical.component";
import {TechProfileComponent} from "./views/tech-profile/tech-profile.component";
import {HomeComponent} from "./components/home/home.component";
import {RequestComponent} from "./components/request/request.component";
import {TasksComponent} from "./tasking/pages/tasks/tasks.component";
import {ViewTasksComponent} from "./tasking/pages/view-tasks/view-tasks.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {AnalyticsComponent} from "./views/analytics/analytics.component";
import {InventoryComponent} from "./views/inventory/inventory.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {MyProfileComponent} from "./views/my-profile/my-profile.component";
import {MembershipComponent} from "./Memberships/membership/membership.component";
import {LoadingComponent} from "./Memberships/membership/page/loading/loading.component";
import {ViewProgressTaskComponent} from "./monitoring/pages/view-progress-task/view-progress-task.component";
import {ListTaskComponent} from "./monitoring/pages/list-task/list-task.component";

const routes: Routes = [
  {path: 'searchTechnicals', component: SearchTechnicalComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'techProfile/:id', component: TechProfileComponent},
  {path: 'request', component: RequestComponent},
  {path: 'task', component: TasksComponent},
  {path:'viewtask/:id',component:ViewTasksComponent},
  {path: 'request', component: RequestComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/analytics', component: AnalyticsComponent},
  {path: 'dashboard/inventory', component: InventoryComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'edit-profile/:id', component: EditProfileComponent},
  {path: 'user/Membership',component: MembershipComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'viewprogresstask/:id',component:ViewProgressTaskComponent},
  {path:'progress',component:ListTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
