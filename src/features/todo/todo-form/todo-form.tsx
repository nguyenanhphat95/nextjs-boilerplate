'use client';
import { MyButton, MyInput } from "@/features/ui";
import { useEffect, useState } from "react";
import { createTodo } from "../actions/create-todo";
import { TodoFormProps } from "./types";
import { updateTodo } from "../actions/update-todo";

export function TodoForm({ data }: TodoFormProps) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
    }
  }, [data])

  const handleSubmit = async () => {
    if (data?.id) {
      updateTodo({ name, id: data.id })
      return;
    }
    createTodo({ name });
  }

  return (
    <form action={handleSubmit} className="flex flex-col space-y-2">
      <h1>Todo name:</h1>
      <MyInput value={name} onChange={e => setName(e.target.value)} />
      <div className="pt-4 flex justify-center">
        <MyButton htmlType="submit">{data?.id ? 'Update' : 'Create'}</MyButton>
      </div>
    </form>
  )
}

