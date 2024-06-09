'use server'
import { http } from "@/lib";
import { TodoItemType } from "../todo-list/types";

export async function getTodo(id: string) {
  return http.get<TodoItemType>(`/todo/${id}`);
}
