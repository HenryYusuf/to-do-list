<script setup lang="ts">
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";
import Input from "./components/ui/input/Input.vue";
import Button from "./components/ui/button/Button.vue";
import Separator from "./components/ui/separator/Separator.vue";
import TodoItem from "./components/TodoItem.vue";

import { useTodosStore } from "./stores/Todo/TodoStore";

const store = useTodosStore();

// Add a new todo
function addTodo(e: Event) {
  const text = (e.target as HTMLInputElement).value.trim();
  if (text) {
    store.addTodo(text);
    (e.target as HTMLInputElement).value = "";
  }
}

store.$subscribe((mutation, state) => {
  console.log(mutation, "ini mutation");
  // console.log(state.todos, "ini state");

  localStorage.setItem(
    import.meta.env.VITE_STORAGE_KEY as string,
    JSON.stringify(state.todos)
  );
});
</script>

<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="w-1/2">
      <h1 class="text-center text-blue-500 text-4xl font-bold mb-5">TODOS</h1>

      <Input
        class="mb-5"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      />

      <ul class="border-2 border-slate-500 rounded-md mb-5">
        <li class="flex flex-row justify-between items-center my-4">
          <div class="flex flex-row gap-5 items-center mx-5">
            <Checkbox />
            <span>Item left</span>
          </div>
          <nav>
            <ul class="flex flex-row mx-5 gap-5">
              <li>All</li>
              <li>Active</li>
              <li>Completed</li>
            </ul>
          </nav>
        </li>
        <Separator class="my-4" />
        <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
      </ul>

      <Button class="w-full">Clear completed</Button>
    </div>

    <ul>
      <li v-for="todo in store.todos">
        <p>{{ todo }}</p>
      </li>
    </ul>
  </div>
</template>
