import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItodoItem} from '../to-do-list';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  @Input() todoInfo: ItodoItem;
  @Output() deleteNotify: EventEmitter<ItodoItem> = new EventEmitter<ItodoItem>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteNotify.emit(this.todoInfo);
  }
}
