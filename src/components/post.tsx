import { Badge } from '@/components/badge';
import style from '@/styles/pages/post.module.css';
import { CalendarIcon, PencilIcon } from '@primer/octicons-react';
import IGetPostBySlug from '@/interface/IGetPostBySlug';

const Post = ({ post }: { post: IGetPostBySlug }) => {
  return (
    <article>
      <header className="space-y-4 border-b border-slate pb-6 md:space-y-6">
        <h1 className="text-3xl md:text-5xl">{post.title}</h1>

        <div className="grid grid-flow-row grid-cols-1 justify-between gap-y-4 md:grid-flow-col md:grid-cols-2 md:gap-y-0">
          <div className="space-x-2">
            {post.tags &&
              post.tags.length !== 0 &&
              post.tags.map((tag) => <Badge key={tag.name}>{tag.name}</Badge>)}
          </div>

          <div className="flex space-x-4 md:justify-end">
            <span className="flex items-center space-x-2">
              <CalendarIcon size={20} />
              <dd className="sr-only">Posted on</dd>
              <dt>{post.createdAt}</dt>
            </span>

            {post.lastEditedAt && (
              <span className="flex items-center space-x-2">
                <PencilIcon size={20} />
                <dd className="sr-only">Last updated</dd>
                <dt>{post.lastEditedAt}</dt>
              </span>
            )}
          </div>
        </div>
      </header>
      <div
        className={style.post}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};
export { Post };
