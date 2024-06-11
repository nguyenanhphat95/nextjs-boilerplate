'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/types";
import { http } from "@/shared/http";
import { redirect } from "next/navigation";

export async function createTodo(data: Pick<TodoItemType, 'name'>) {
  await http.post('/todo', data);
  revalidatePath('/');
  redirect('/');
}
