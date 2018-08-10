import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCardComponent } from './to-do-list/to-do-card/to-do-card.component';
import { ToDoCreatorComponent } from './to-do-list/to-do-creator/to-do-creator.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ToDoListComponent, ToDoCardComponent, ToDoCreatorComponent],
  exports: [ToDoListComponent]
})
export class ToDoListModule { }
