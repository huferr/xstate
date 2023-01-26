import { create } from "zustand";

export const useTodos = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  editTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => {
        if (t.id !== todo.id) return t;
        return todo;
      }),
    })),

  deleteTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    })),
}));
