import matter from 'gray-matter';
import moment from 'moment';
import IGetRecentPosts from '@/interface/IGetRecentPosts';

interface Prop extends IGetRecentPosts {
  body: string;
}

export default async function mapPost({ node }: { node: Prop }) {
  const { data: frontMatter } = matter(node.body);

  return {
    id: node.id,
    slug: frontMatter && frontMatter.slug,
    title: node && node.title,
    description: frontMatter && frontMatter.description,
    createdAt: moment(node.createdAt).format('LL'),
  };
}
