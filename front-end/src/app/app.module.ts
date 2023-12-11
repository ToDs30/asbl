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
import { InfoComponent } from './info/info.component';
import { ListeBenevoleComponent } from './liste-benevole/liste-benevole.component';
import { AddBenevoleComponent } from './add-benevole/add-benevole.component';
import { GsmFormatPipe } from './pipes/gsmFormat.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AddLoginComponent } from './add-login/add-login.component';







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
    InfoComponent,
    ListeBenevoleComponent,
    AddBenevoleComponent,
    GsmFormatPipe,
    LoginComponent,
    AddLoginComponent,
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot({ 
      positionClass: 'toast-top-center'}),
      BrowserAnimationsModule,
      AppRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
