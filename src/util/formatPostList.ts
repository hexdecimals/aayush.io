import matter from 'gray-matter';
import moment from 'moment';

type Prop = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
};

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
