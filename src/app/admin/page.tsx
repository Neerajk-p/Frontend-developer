'use client'

import Link from 'next/link'
import { getPosts } from '@/lib/api'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Post } from '@/types/post' 

export default function AdminPage() {
  const queryClient = useQueryClient()

  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  const deletePost = useMutation({
    mutationFn: async (id: number) =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  })

  return (
    <div className="p-4 bg-yellow-500">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <Link href="/admin/new" className="text-black mb-4 text-lg inline-block px-4 py-4">
        + New Post
      </Link>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow bg-gray-100 shadow-lg">
            <h2 className="font-semibold text-red-800">{post.title}</h2>
            <div className="mt-2 flex gap-4">
              <Link href={`/admin/edit/${post.id}`} className="text-blue-500">
                Edit
              </Link>
              <button onClick={() => deletePost.mutate(post.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
