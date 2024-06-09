'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/types";
import { http } from "@/lib";
import { redirect } from "next/navigation";

export async function createTodo(data: Pick<TodoItemType, 'name'>) {
  await http.post('/todo', data);
  revalidatePath('/');
  redirect('/');
}
