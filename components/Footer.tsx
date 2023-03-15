import { Flex, Link } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

export default function Footer() {
  const reDocLink = (
    <Link
      role="link"
      aria-label="ReDoc link"
      href="https://data-api.makerdao.network/redoc">
      ReDoc
    </Link>
  );
  const swaggerUiLink = (
    <Link
      role="link"
      aria-label="Swagger UI link"
      href="https://data-api.makerdao.network/docs">
      Swagger UI
    </Link>
  );
  const tokenFlowLink = (
    <Link
      role="link"
      aria-label="Token Flow link"
      href="https://tokenflow.live/">
      Token Flow
    </Link>
  );

  return (
    <Flex
      role="contentinfo"
      aria-label="Layout Footer"
      sx={{
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 71
      }}>
      <Text sx={{ textAlign: 'center' }}>
        © 2023 DAI Foundation ・ AGPL-3.0 license ・ API ( {reDocLink} |{' '}
        {swaggerUiLink}) ・Powered by {tokenFlowLink} ・ Nansen Query & NaaS
      </Text>
      <Text sx={{ textAlign: 'center' }}>
        Brought to you by Data Insights Core Unit
      </Text>
    </Flex>
  );
}
