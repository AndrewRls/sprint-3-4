import { Link } from 'react-router-dom'
import { ROTAS } from '../../routes/rotas'
import type { Post } from '../../types'

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const inicial = (post.nomeAutor || '?').charAt(0).toUpperCase()

  return (
    <article className="flex flex-col rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <header className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white"
        >
          {inicial}
        </span>

        <h2 className="truncate text-lg font-bold">{post.nomeAutor}</h2>
      </header>

      <p className="mb-6 line-clamp-4 flex-1 leading-relaxed [overflow-wrap:anywhere]">
        {post.conteudo}
      </p>

      <Link
        to={ROTAS.detalhePost(post.idPost)}
        className="inline-block rounded-lg bg-purple-600 px-5 py-3 text-center font-bold text-white transition hover:bg-purple-700"
      >
        Ver post
      </Link>
    </article>
  )
}

export default PostCard