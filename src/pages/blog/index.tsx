import type { NextPageWithLayout } from '../_app';
import type { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PostCard } from '@/components/postCard';
import { Seo } from '@/components/seo';
import BlogLayout from '@/layouts//blog';
import formatPostList from '@/util/formatPostList';
import client from '@/lib/graphql/client';
import getRecentPosts from '@/lib/graphql/getRecentPosts';
import { motion } from 'framer-motion';
import IGetRecentPosts from '@/interface/IGetRecentPosts';
import Search from '@/components/search';

const IndexPage: NextPageWithLayout = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo title="Blog Posts" description="List of my recent blog posts." />

      <Search />
      <h1 className="pb-6 pt-4 text-3xl md:text-5xl">Recent Posts</h1>

      <ul className="divide-y divide-slate">
        {posts.map((post: IGetRecentPosts) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="py-5 px-2 hover:cursor-pointer"
            key={post.id}
          >
            <PostCard post={post} />
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=59'
  );

  const { data } = await client
    .query(getRecentPosts, {
      owner: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
      repo: process.env.NEXT_PUBLIC_GITHUB_REPO,
      limit: 10,
    })
    .toPromise();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const posts = await Promise.all(
    data.repository.discussions.edges.map(formatPostList)
  );

  return { props: { posts } };
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default IndexPage;
