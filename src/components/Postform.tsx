'use client'

import { useState } from 'react'
import { Post } from '@/types/post'

type PostFormProps<T extends Partial<Post>> = {
  initialData?: T
  onSubmit: (data: T) => void | Promise<void>
}

export default function PostForm<T extends Partial<Post>>({
  initialData,
  onSubmit,
}: PostFormProps<T>) {
  const [title, setTitle] = useState(initialData?.title ?? '')
  const [body, setBody] = useState(initialData?.body ?? '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit({
      ...(initialData || {}),
      title,
      body,
    } as T)
  }

  return (
    <div className='bg-yellow-500 h-screen flex flex-col items-center justify-center '>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border border-black rounded shadow-lg bg-gray-200"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="w-full p-2 border border-black rounded shadow-lg bg-gray-200"
      />
      <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
    </div>
  )
}
