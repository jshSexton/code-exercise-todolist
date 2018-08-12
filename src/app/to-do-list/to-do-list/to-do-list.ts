// File for Enums and Interfaces used by To-Do component
export enum FilterMode {
  all = 'allTasks',
  todo = 'todoTasks',
  done = 'doneTasks'
}

export interface ItodoItem {
  id: number;
  description: string;
  isFinished: boolean;
}
