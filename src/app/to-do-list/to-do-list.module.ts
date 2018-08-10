// Module Imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
// Component Imports
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {ToDoCardComponent} from './to-do-list/to-do-card/to-do-card.component';
import {ToDoCreatorComponent} from './to-do-list/to-do-creator/to-do-creator.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
  ],
  declarations: [
    ToDoListComponent,
    ToDoCardComponent,
    ToDoCreatorComponent],
  exports: [
    ToDoListComponent
  ]
})

export class ToDoListModule { }
