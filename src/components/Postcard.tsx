import Link from 'next/link'

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-gray-100 flex flex-col items-center">
      <h2 className="text-lg font-semibold text-red-800">{post.title}</h2>
      <p className='text-orange-800'>{post.body.slice(0, 100)}...</p>
      <Link href={`/posts/${post.id}`} className="text-blue-900 mt-2 inline-block">Read more</Link>
    </div>
  )
}
