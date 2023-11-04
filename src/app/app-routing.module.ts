import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchTechnicalComponent} from "./views/search-technical/search-technical.component";
import {TechProfileComponent} from "./views/tech-profile/tech-profile.component";
import {HomeComponent} from "./components/home/home.component";
import {RequestComponent} from "./components/request/request.component";
import {TaskComponent} from "./components/task/task.component";
import {CreateTaskComponent} from "./components/task/create-task/create-task.component";
import {ViewTaskComponent} from "./components/task/view-task/view-task.component";
import {TasksComponent} from "./tasking/pages/tasks/tasks.component";
import {CreateTasksComponent} from "./tasking/pages/create-tasks/create-tasks.component";
import {ViewTasksComponent} from "./tasking/pages/view-tasks/view-tasks.component";
import {EditTasksComponent} from "./tasking/pages/edit-tasks/edit-tasks.component";

const routes: Routes = [
  {path: 'searchTechnicals', component: SearchTechnicalComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'techProfile/:id', component: TechProfileComponent},
  {path: 'request', component: RequestComponent},
  {path: 'task', component: TasksComponent},
  {path:'viewtask/:id',component:ViewTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
