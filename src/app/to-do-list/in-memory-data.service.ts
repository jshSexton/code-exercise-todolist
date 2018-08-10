import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todo_items = [
      { id: 11, description: 'Learn more about React', isFinished: false },
      { id: 12, description: 'Go out with my colleges', isFinished: false },
      { id: 13, description: 'Buy toothpaste', isFinished: false },
      { id: 14, description: 'Visit New York', isFinished: true },
    ];
    return {todo_items};
  }
}
