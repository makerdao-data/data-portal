export const ethLastBlockFetcher = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_ALCHEMY_ETH_API}/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_TOKEN}`,
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

export const arbitrumLastBlockFetcher = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_API}/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_TOKEN}`,
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

export const optimismLastBlockFetcher = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_ALCHEMY_OPTIMISM_API}/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_TOKEN}`,
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
