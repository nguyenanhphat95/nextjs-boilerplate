'use client';

import { MyButton } from "@/features/ui";
import { TodoItemType } from "./types";
import { deleteTodo } from "../actions/delete-todo";
import Link from "next/link";

type TodoProps = {
  item: TodoItemType;
}

export default function TodoItem({ item }: TodoProps) {
  const handleDelete = () => {
    deleteTodo(item.id);
  }

  return (
    <div className="flex justify-between">
      <span>{item.id} - {item.name}</span>
      <span className="flex space-x-2">
        <Link href={`/${item.id}`}><MyButton>Edit</MyButton></Link>
        <MyButton danger onClick={handleDelete}>Delete</MyButton>
      </span>
    </div>
  )
}
