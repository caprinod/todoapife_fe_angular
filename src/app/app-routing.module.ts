import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksAddComponent } from './components/tasks-add/tasks-add.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksEditComponent } from './components/tasks-edit/tasks-edit.component';
import { TasksDeleteComponent } from './components/tasks-delete/tasks-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'add', component: TasksAddComponent },
  { path: 'edit/:id', component: TasksEditComponent },
  { path: 'list', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }