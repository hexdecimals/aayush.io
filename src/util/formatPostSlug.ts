import matter from 'gray-matter';
import moment from 'moment';
import { marked } from 'marked';
import HLjs from 'highlight.js';
import IPost from '@/interface/IPost';

marked.setOptions({
  highlight: function (code: string) {
    return HLjs.highlightAuto(code).value;
  },
});

export default async function formatPostSlug({ node }: { node: IPost }) {
  const { data: frontMatter, content: markdownContent } = matter(node.body);

  const compiled = marked.parse(markdownContent);

  return {
    number: node.number,
    id: node.id,
    slug: frontMatter && frontMatter.slug,
    title: node && node.title,
    description: frontMatter && frontMatter.description,
    createdAt: moment(node.createdAt).format('LL'),
    content: String(compiled),

    updatedAt:
      node.lastEditedAt && moment(node.lastEditedAt).startOf('hour').fromNow(),

    category: node.category && {
      id: node.category.id,
      name: node.category.name,
    },

    tags:
      node.labels &&
      node.labels.edges.map(({ node: tag }) => {
        return {
          name: tag.name,
          color: tag.color,
        };
      }),
  };
}
