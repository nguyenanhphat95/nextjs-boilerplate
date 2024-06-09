import { MyButton } from "@/features/ui";
import { TodoListProps } from "./types";
import TodoItem from "./todo-item";
import Link from "next/link";

export function TodoList({ data }: TodoListProps) {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="basis-auto">
          <Link href="/create"> <MyButton>Add Tasks</MyButton></Link>
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
