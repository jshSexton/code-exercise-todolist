import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-creator',
  templateUrl: './to-do-creator.component.html',
  styleUrls: ['./to-do-creator.component.scss']
})
export class ToDoCreatorComponent implements OnInit {
  @Output() formSubmitNotify: EventEmitter<string> = new EventEmitter<string>();
  newTask: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitNotify.emit(this.newTask);
    this.newTask = '';
  }
}
