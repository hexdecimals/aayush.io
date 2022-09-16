import IPost from '@/interface/IPost';
import Link from 'next/link';

const PostCard = ({ post }: { post: IPost }) => (
  <Link href={'blog/' + post.slug}>
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <div className="text-base font-medium leading-6">{post.createdAt}</div>
      <div className="space-y-3 xl:col-span-3">
        <h2 className="text-2xl">{post.title}</h2>
        <p className="text-sm">{post.description}</p>
      </div>
    </article>
  </Link>
);

export { PostCard };
