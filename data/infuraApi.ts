export const starknetLastBlockFetcher = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_INFURA_STARKNET_API}/v3/${process.env.NEXT_PUBLIC_INFURA_API_TOKEN}`,
    {
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'starknet_blockNumber',
        params: [],
        id: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  ).then((res) => res.json());
