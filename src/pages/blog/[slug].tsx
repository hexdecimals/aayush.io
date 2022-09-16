import type { NextPageWithLayout } from '../_app';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement, useRef } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';

import { Seo } from '@/components/seo';
import { Post } from '@/components/post';
import { Comment } from '@/components/comments';
import BlogLayout from '@/layouts/blog';
import formatPostSlug from '@/util/formatPostSlug';
import client from '@/lib/graphql/client';
import getPostBySlug from '@/lib/graphql/getPostBySlug';

const PostPage: NextPageWithLayout = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: carouselRef });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Seo title={post.title} description={post.description} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed left-5 top-0 bottom-0 hidden h-full items-center lg:flex"
      >
        <div className="w-1 bg-secondary">
          <motion.div
            initial="hidden"
            style={{ scaleY }}
            className="h-56 max-h-56 origin-top rounded-lg bg-accent"
          />
        </div>
      </motion.div>

      <div ref={carouselRef}>
        <Post post={post} />
      </div>

      <Comment post={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  res.setHeader('Cache-Control', 'public, s-maxage=60');

  const slug = params?.slug as string;
  const { data } = await client
    .query(getPostBySlug, {
      query: `slug: ${slug} in:body repo:${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${process.env.NEXT_PUBLIC_GITHUB_REPO}`,
    })
    .toPromise();
  if (!data || !data.search || !data.search.edges || !data.search.edges[0]) {
    return {
      notFound: true,
    };
  }

  const post = await formatPostSlug(data.search.edges[0]);
  return { props: { post } };
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default PostPage;
