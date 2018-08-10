import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItodoItem} from './to-do-list';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  deleteTodoItem(item: ItodoItem): Observable<Array<ItodoItem>> {
    return this.http.delete<Array<ItodoItem>>(`api/todo_items/${item.id}`, httpOptions);
  }
}
