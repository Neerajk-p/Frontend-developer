'use client'

import { getPosts } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import PostCard from '@/components/Postcard'

export default function Home() {
  const { data: posts = [] } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  return (
    <main className="p-4 bg-yellow-500">
      <h1 className="text-2xl font-bold mb-4 text-center">Public Posts</h1>
      <div className="grid gap-4">
        {posts.map((post: { id: number; title: string; body: string }) => (
  <PostCard key={post.id} post={post} />
))}
      </div>
    </main>
  )
}
