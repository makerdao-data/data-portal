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
  const nansenQueryLink = (
    <Link
      role="link"
      aria-label="Nansen Query link"
      href="https://www.nansen.ai/query">
      Nansen Query & NaaS
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
        DAI Foundation ・ AGPL-3.0 license ・ Data API ( {reDocLink} |{' '}
        {swaggerUiLink})
      </Text>
      <Text sx={{ textAlign: 'center' }}>
        Powered by {tokenFlowLink} ・ {nansenQueryLink}
      </Text>
    </Flex>
  );
}
