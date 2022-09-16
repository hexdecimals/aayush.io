import { createClient } from '@urql/core';

export default createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        'user-agent': 'google.com',
      },
    };
  },
  requestPolicy: 'network-only',
});
