import {Component, OnInit} from '@angular/core';
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

  ngOnInit() {
    // Get list of items from db
    this.todoService.getTodoItems().subscribe(apiResponse => {
      this.todoItems = apiResponse;
    });
  }

  deleteTodoItem(todoItem: ItodoItem) {
    // Call service to delete item from db
    this.todoService.deleteTodoItem(todoItem).subscribe(() => {
      // After getting response from server remove the item from the list
      this.todoItems = this.todoItems.filter(item => {
        return item.id !== todoItem.id;
      });
    });
  }

  addNewTodoItem(todoTask: string) {
    const newTask: ItodoItem = {
      id: null,
      description: todoTask,
      isFinished: false
    };
    this.todoService.addTodoItem(newTask).subscribe(task => {
      this.todoItems.push(task);
    });
  }
}
