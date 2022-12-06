import { Api } from '../__generated__/dataAPI';

export const dataApiClient = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  baseApiParams: {
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN
    }
  }
});

export const ethLastBlockFetcher = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_ALCHEMY_API}/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_TOKEN}`,
    {
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 0
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  ).then((res) => res.json());
