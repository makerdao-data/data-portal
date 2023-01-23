import { ResponsivePie } from '@nivo/pie';
import { useIntl } from 'next-intl';
import { Box, Flex, useColorMode } from 'theme-ui';
import {
  createNetworkComparisonChartsDataSeries,
  domainColor,
  NetworkComparisonIndex
} from '../../utils/data-transformers/create-network-comparison-chart-data-series';
import { Summary } from '../../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Fragment, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';

type NetworkComparitionChartProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

export default function NetworkComparisonCharts({
  data,
  error
}: NetworkComparitionChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();
  const dataSeries = useMemo(
    () => createNetworkComparisonChartsDataSeries(data),
    [data]
  );

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        ['.tv-lightweight-charts']: {
          borderRadius: '8px'
        },
        border: error ? 'none' : '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        // height: ['100%', '100%', '260px'],
        flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'],
        alignSelf: 'flex-end',
        padding: 2
      }}>
      <Fragment>
        <Text
          variant="smallHeading"
          role="textbox"
          aria-label="Network comparison title">
          Network comparison
        </Text>

        {error ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {'Network comparison data is not available at the moment.'}
          </Text>
        ) : Object.values(dataSeries).every((value) => value.length) ? (
          <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
            {Object.entries(dataSeries).map(([key, data]) => (
              <Flex
                key={key}
                sx={{
                  flexDirection: 'column',
                  height: '220px',
                  width: '100%'
                }}>
                <Box
                  sx={{ height: '90%' }}
                  role="figure"
                  aria-label={`Network ${
                    NetworkComparisonIndex[
                      key as keyof typeof NetworkComparisonIndex
                    ]
                  } comparison chart`}>
                  <ResponsivePie
                    data={data}
                    id={({ formattedId }) => formattedId}
                    margin={{ top: 40, right: 0, bottom: 20, left: 0 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={[
                      domainColor.optimism,
                      domainColor.arbitrum,
                      domainColor.starknet
                    ]}
                    borderWidth={1}
                    borderColor={{
                      from: 'color',
                      modifiers: [['darker', 0.2]]
                    }}
                    valueFormat={(value) =>
                      intl.formatNumber(value, {
                        style: 'percent',
                        maximumFractionDigits: 0,
                        notation: 'compact'
                      })
                    }
                    arcLinkLabelsSkipAngle={1}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    arcLinkLabel={({ data }) => data.formattedId}
                    arcLabelsSkipAngle={15}
                    arcLabelsTextColor="fff"
                    theme={{
                      textColor: colorMode === 'light' ? '#231536' : '#fff'
                    }}
                    tooltip={({ datum }) => {
                      return (
                        <Flex
                          as="div"
                          sx={{
                            backgroundColor: 'background',
                            padding: 2,
                            border: '1px solid',
                            borderColor: 'secondary',
                            borderRadius: '5px',
                            gap: 1
                          }}>
                          <Text variant="boldBody">{`${
                            datum.data.formattedId
                          } ${intl.formatNumber(datum.data.value, {
                            style: 'percent',
                            maximumFractionDigits: 2,
                            notation: 'compact'
                          })}`}</Text>
                        </Flex>
                      );
                    }}
                  />
                </Box>
                <Text variant="smallText" sx={{ textAlign: 'center' }}>
                  {
                    NetworkComparisonIndex[
                      key as keyof typeof NetworkComparisonIndex
                    ]
                  }
                </Text>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Skeleton height={220} style={{ borderRadius: '8px', top: '-4px' }} />
        )}
      </Fragment>
    </Flex>
  );
}
