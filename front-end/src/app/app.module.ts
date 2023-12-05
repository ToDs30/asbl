import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './pipes/filtre.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddPersonnesComponent } from './add-personnes/add-personnes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { TaskListComponent } from './task-list/task-list.component';
import { IndexComponent } from './index/index.component';

import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';
import { CommonModule } from '@angular/common';
import { GalerieComponent } from './galerie/galerie.component';
import { InfoComponent } from './info/info.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { AddBenevoleComponent } from './add-benevole/add-benevole.component';
import { GsmFormatPipe } from './pipes/gsmFormat.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddPersonnesComponent,
    ListePersonnesComponent,
    TaskListComponent,
    FilterPipe,
    IndexComponent,
    AddCommentaireComponent,
    ListeCommentaireComponent,
    GalerieComponent,
    InfoComponent,
    ListeBenevoleComponent,
    AddBenevoleComponent,
    GsmFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
