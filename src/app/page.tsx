import { TodoList } from "@/features/todo";

const LIST_TODO = [
  {
    name: 'Study nextjs',
  },
  {
    name: 'Study English'
  },
  {
    name: 'Sleep'
  }
]

export default function TodoApp() {
  return (
    <main>
      <TodoList data={LIST_TODO} />
    </main>
  )
}
