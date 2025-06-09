'use client'

import { useQuery } from '@tanstack/react-query'
import { getPost } from '@/lib/api'
import { useParams } from 'next/navigation'

export default function PostDetail() {
  const params = useParams()
  const id = params?.id as string | undefined

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id!),
    enabled: !!id, // only run the query when id is available
  })

  if (!id) return <div className="p-4 text-red-500">Missing Post ID</div>
  if (isLoading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Failed to load post</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p className="mt-4">{post?.body}</p>
    </div>
  )
}
