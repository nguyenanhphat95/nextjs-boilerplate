'use client'
import { useStore } from '@/shared/store'
import { Input } from 'antd'

export default function ZustandPage() {
  const data = useStore(state => state);
  return (
    <main>
      <label>
        First name
        <Input
        />
      </label>

      <p>
      </p>
    </main>
  )
}