export interface ToDo {
  title: string;
  description: string;
  personAssigned: string;
  dateOfFinish: string;
  isCompleted: boolean;
}
export interface StoredToDo extends ToDo {
  id: string;
}