<script setup lang="ts">
import { X } from "lucide-vue-next";

import Checkbox from "@/components/ui/checkbox/Checkbox.vue";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import Separator from "@/components/ui/separator/Separator.vue";

import { useTodosStore } from "@/stores/Todo/TodoStore";
import type { TodosProps, TodoProps } from "@/stores/Todo/types";

const store = useTodosStore();

const props = defineProps<TodosProps>();

const toggleTodo = (todo: TodoProps) => store.toggleTodo(todo);
</script>

<template>
  <li class="flex flex-row justify-between items-center space-x-5 mx-5">
    <div>
      <Checkbox
        :checked="props.todo.done"
        @update:checked="toggleTodo(props.todo)"
      />
    </div>
    <Input type="text" :default-value="todo.text" />
    <Button variant="outline" size="icon">
      <X class="w-4 h-4" />
    </Button>
  </li>
  <Separator class="my-4" />
</template>
@/stores/Todo/TodoStore
