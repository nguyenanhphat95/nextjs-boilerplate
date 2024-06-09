'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/types";
import { http } from "@/lib";
import { redirect } from "next/navigation";

export async function updateTodo(data: Pick<TodoItemType, 'name' | 'id'>) {
  await http.put(`/todo${data.id}`, data);
  revalidatePath('/');
  redirect('/');
}