function globalSetup() {
  process.env.NEXT_PUBLIC_API_URL = 'https://data-api.makerdao.network';
  process.env.NEXT_PUBLIC_API_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzIn0.ZnzBR61d_AK-Xgve-3DHrIxZWMQbkZ3-nUbfGrSyZec';
  process.env.NEXT_PUBLIC_ALCHEMY_API = 'https://eth-mainnet.g.alchemy.com';
  process.env.NEXT_PUBLIC_ALCHEMY_API_TOKEN =
    'kKpGhqgtnDaz1n6PhdhZTXBPKcX9vlVN';
}

export default globalSetup;
