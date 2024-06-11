'use client'
import { MyButton } from "@/features/ui";
import { TodoListProps } from "./types";
import TodoItem from "./todo-item";
import Link from "next/link";
import { useAuthContext } from "@/shared/components";

export function TodoList({ data }: TodoListProps) {
  const { isAuthenticated, logout } = useAuthContext();

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="basis-auto">
          <Link href="/create"><MyButton>Add Tasks</MyButton></Link>
        </div>
        <div className="basis-auto">
          {!isAuthenticated ? <Link href="/login"><MyButton>Login</MyButton></Link> : <MyButton onClick={logout}>Logout</MyButton>}
        </div>
      </div>
      <div className="flex space-y-2 flex-col mt-5 p-4 bg-slate-300 rounded">
        {data.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
