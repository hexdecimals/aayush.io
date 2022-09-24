import { NextApiRequest, NextApiResponse } from 'next';

import client from '@/lib/graphql/client';
import getPostByQuery from '@/lib/graphql/getPostByQuery';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { q },
    method,
  } = req;
  if (method === 'GET' && q && q.length > 4) {
    const { data } = await client
      .query(getPostByQuery, {
        query: `slug: ${q} in:body repo:${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${process.env.NEXT_PUBLIC_GITHUB_REPO}`,
        first: 5,
      })
      .toPromise();

    if (!data || !data.search || !data.search.edges || !data.search.edges[0]) {
      return {
        notFound: true,
      };
    }

    const x = [];
    data.search.edges.map(({ node }: { node: any }) => x.push(node));
    res.status(200).json(data.search.edges);
    //res.status(200).json(data.search.edges);
  } else res.status(401).json('error');
}
