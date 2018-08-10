import { Component, OnInit } from '@angular/core';
import {ItodoItem} from './to-do-list';
import {ToDoListService} from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todoItems: Array<ItodoItem>;

  constructor(
    private todoService: ToDoListService,
  ) { }

  ngOnInit(): void {
    this.todoService.getTodoItems().subscribe(apiResponse => {
      this.todoItems = apiResponse;
      console.log('Data from API', this.todoItems);
    });
  }

}
