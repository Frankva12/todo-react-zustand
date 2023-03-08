import { create, StateCreator } from "zustand";
import { ToDo, StoredToDo } from "../interfaces/Todo";
import { persist, devtools } from "zustand/middleware";
import exampleCard  from "./exampleCards";

interface TodoState {
  todos: StoredToDo[];
  // eslint-disable-next-line no-empty-pattern
  addTodo: ({}: ToDo) => void;
  removeTodo: (id: string) => void;
  markAsCompleted: (id: string) => void;
}

const todoSlice: StateCreator<TodoState> = (set) => ({
  todos: exampleCard,
  addTodo: ({ title, description, personAssigned, dateOfFinish }: ToDo) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          title,
          personAssigned,
          description,
          dateOfFinish,
          isCompleted: false,
        } as StoredToDo,
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  markAsCompleted: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? ({ ...todo, isCompleted: true } as StoredToDo) : todo
      ),
    }));
  },
});

const useToDo = create<TodoState>()(
  persist(
    devtools((...a) => ({
      ...todoSlice(...a),
    })),
    { name: "ToDo-persist" }
  )
);

export default useToDo;