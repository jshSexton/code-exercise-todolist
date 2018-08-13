import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItodoItem} from '../to-do-list';

enum HoverState {
  None = 0,
  OverCheckbox = 1,
  OverDelete = 2
}

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  @Input() todoInfo: ItodoItem;   // Get the info from parent
  @Output() deleteNotify: EventEmitter<ItodoItem> = new EventEmitter<ItodoItem>();    // event to inform parent to remove this item

  currentHoverState: HoverState = HoverState.None;    // controls color and display of the delete button
  hoverStateEnum = HoverState;    // exposes enum to angular http

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteNotify.emit(this.todoInfo);
  }

  // Mouse enters card box
  onMouseEnter() {
    this.currentHoverState = HoverState.OverCheckbox;
  }

  // Mouse leaves card box
  onMouseLeave() {
    this.currentHoverState = HoverState.None;
  }

  // Mouse is over the delete button in particular
  onMouseOverDelete() {
    this.currentHoverState = HoverState.OverDelete;
  }

  // Mouse is no longer over the delete button in particular
  onMouseOutDelete() {
    this.currentHoverState = HoverState.OverCheckbox;
  }
}
