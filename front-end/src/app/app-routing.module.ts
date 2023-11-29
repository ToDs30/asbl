import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddPersonnesComponent } from './add-personnes/add-personnes.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'add-personnes', component: AddPersonnesComponent},
  { path: 'liste-personnes', component: ListePersonnesComponent},
  { path: 'task-list', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
