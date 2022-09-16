import { createClient } from '@urql/core';

export default createClient({
  url: process.env.GITHUB_API_URL ?? '',
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
