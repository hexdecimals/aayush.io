import Giscus from '@giscus/react';

interface Prop {
  category: {
    name: string;
    id: string;
  };
  number: string;
}

const Comment = ({ post }: { post: Prop }) => {
  return (
    <Giscus
      id="comments"
      repo="hexdecimals/aayush.io"
      repoId={process.env.NEXT_PUBLIC_GITHUB_REPO_ID ?? ''}
      category={post.category.name}
      categoryId={post.category.id}
      mapping="number"
      term={post.number}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
  );
};

export { Comment };
