import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCreatorComponent } from './to-do-creator.component';

describe('ToDoCreatorComponent', () => {
  let component: ToDoCreatorComponent;
  let fixture: ComponentFixture<ToDoCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
