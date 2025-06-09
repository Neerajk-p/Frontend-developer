'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import PostForm from '../../../components/Postform'
import { createPost } from '@/lib/api'
import { Post } from '@/types/post'

export default function NewPostPage() {
  const router = useRouter()

  const mutation = useMutation<Post, Error, Omit<Post, 'id'>>({
    mutationFn: createPost,
    onSuccess: () => {
      router.push('/admin')  // Redirect after success
    },
  })

  return (
    <PostForm
      onSubmit={async (data: Omit<Post, 'id'>) => {
        await mutation.mutateAsync(data) // Await the Promise, don't return it
      }}
    />
  )
}
