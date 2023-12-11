import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddPersonnesComponent } from './add-personnes/add-personnes.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { TaskListComponent } from './task-list/task-list.component';
import { IndexComponent } from './index/index.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';
import { InfoComponent } from './info/info.component';
import { AddBenevoleComponent } from './add-benevole/add-benevole.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddLoginComponent } from './add-login/add-login.component';

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent , canActivate: [AuthGuard]},
  { path: 'add-personnes', component: AddPersonnesComponent, canActivate: [AuthGuard]},
  { path: 'liste-personnes', component: ListePersonnesComponent, canActivate: [AuthGuard]},
  { path: 'task-list', component: TaskListComponent, canActivate: [AuthGuard]},
  { path: 'app-index', component: IndexComponent},
  { path: 'app-add-commentaire', component: AddCommentaireComponent},
  { path: 'app-liste-commentaire', component: ListeCommentaireComponent, canActivate: [AuthGuard]},
  { path: 'info', component: InfoComponent},
  { path : 'add-benevole', component: AddBenevoleComponent, canActivate: [AuthGuard]},
  { path : 'app-liste-benevole', component: ListeBenevoleComponent, canActivate: [AuthGuard]},
  { path : 'login', component: LoginComponent},
  { path : 'app-add-login', component: AddLoginComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
