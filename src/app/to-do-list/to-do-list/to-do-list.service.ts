import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItodoItem} from './to-do-list';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(
    private http: HttpClient
  ) { }

  // Get todoItems from server
  getTodoItems(): Observable<Array<ItodoItem>> {
    return this.http.get<Array<ItodoItem>>('api/todo_items');
  }
}
