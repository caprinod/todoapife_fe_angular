import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksEditComponent } from './components/tasks-edit/tasks-edit.component';
import { TasksDeleteComponent } from './components/tasks-delete/tasks-delete.component';
import { TasksAddComponent } from './components/tasks-add/tasks-add.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TasksComponent,
    TasksEditComponent,
    TasksDeleteComponent,
    TasksAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
