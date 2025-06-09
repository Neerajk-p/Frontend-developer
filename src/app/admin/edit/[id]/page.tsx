'use client'

import { useQuery, useMutation } from '@tanstack/react-query'
import { getPost, updatePost } from '@/lib/api'
import PostForm from '@/components/Postform'
import { useParams, useRouter } from 'next/navigation'
import { Post } from '@/types/post'

export default function EditPostPage() {
  const { id } = useParams()
  const router = useRouter()

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id as string),
    enabled: !!id,
  })

  const mutation = useMutation<Post, Error, Post>({
    mutationFn: updatePost,
    onSuccess: () => router.push('/admin'),
  })

  if (isLoading || !post) return <p className="p-4">Loading...</p>

  return (
    <PostForm<Post>  // 👈 force the generic to use full Post
      initialData={post}
      onSubmit={async (data) => {
        await mutation.mutateAsync(data)  
      }}
    />
  )
}
