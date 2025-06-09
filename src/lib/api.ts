import { Post } from '../types/post'

export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export const getPost = async (id: string | number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export async function updatePost(data: Post): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error('Failed to update post')

  return res.json() 
}

export async function createPost(post: Omit<Post, 'id'>): Promise<Post> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })

  if (!res.ok) throw new Error('Failed to create post')

  return res.json()  
}