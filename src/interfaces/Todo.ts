//It'll be used in the form
export interface ToDo {
  title: string;
  description: string;
  personAssigned: string;
  dateOfFinish: string;
  isCompleted: boolean;
}

//It'll be used inside the store
export interface StoredToDo extends ToDo {
  id: string;
}