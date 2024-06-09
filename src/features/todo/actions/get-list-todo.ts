'use server'
import { http } from "@/lib";
import { TodoItemType } from "../todo-list/types";

export async function getListTodo() {
  return http.get<TodoItemType[]>('/todo');
}
