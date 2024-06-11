'use server'
import { http } from "@/shared/http";
import { TodoItemType } from "../todo-list/types";

export async function getListTodo() {
  return http.get<TodoItemType[]>('/todo');
}
