'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/types";
import { http } from "@/lib";

export async function deleteTodo(id: string) {
  await http.delete<TodoItemType>(`/todo/${id}`)
  revalidatePath('/');
}
