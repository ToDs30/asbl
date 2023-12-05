import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddPersonnesComponent } from './add-personnes/add-personnes.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { TaskListComponent } from './task-list/task-list.component';
import { IndexComponent } from './index/index.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';
import { GalerieComponent } from './galerie/galerie.component';
import { InfoComponent } from './info/info.component';
import { AddBenevoleComponent } from './add-benevole/add-benevole.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';


const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'add-personnes', component: AddPersonnesComponent},
  { path: 'liste-personnes', component: ListePersonnesComponent},
  { path: 'task-list', component: TaskListComponent},
  { path: 'app-index', component: IndexComponent},
  { path: 'app-add-commentaire', component: AddCommentaireComponent},
  { path: 'app-liste-commentaire', component: ListeCommentaireComponent},
  { path: 'galerie', component: GalerieComponent},
  { path: 'info', component: InfoComponent},
  { path : 'add-benevole', component: AddBenevoleComponent},
  { path : 'app-liste-benevole', component: ListeBenevoleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
