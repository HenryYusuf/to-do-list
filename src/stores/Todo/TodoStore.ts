import { defineStore } from "pinia";
import { TodoProps } from "./types";

const defaultTodos = [
  { id: 1, text: "Learn JavaScript", done: true },
  { id: 2, text: "Learn Vue 3", done: true },
  { id: 3, text: "Learn Bootstrap 5", done: false },
  { id: 4, text: "Build something awesome!", done: false },
];

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos:
      JSON.parse(
        localStorage.getItem(
          import.meta.env.VITE_STORAGE_KEY as string
        ) as string
      ) || (defaultTodos as TodoProps[]),
  }),
  getters: {},
  actions: {
    addTodo(todo: String) {
      const data = {
        id: Date.now(),
        text: todo,
        done: false,
      };

      this.todos.push(data);
    },
    toggleTodo(todo: TodoProps) {
      const index = this.todos.indexOf(todo);

      this.todos.splice(index, 1, {
        ...todo,
        done: !todo.done,
      });
    },
  },
});
