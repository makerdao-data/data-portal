import { ResponsiveBar } from '@nivo/bar';
import { useIntl } from 'next-intl';
import { Box, Flex, useColorMode } from 'theme-ui';
import {
  createNetworkComparisonChartDataSeries,
  domainColor,
  NetworkComparisonIndex
} from '../transformers/create-network-comparison-chart-data-series';
import { Summary } from '../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Fragment, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';

type NetworkComparitionBarChartProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

export default function NetworkComparisonBarChart({
  data,
  error
}: NetworkComparitionBarChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();
  const dataSeries = useMemo(
    () => createNetworkComparisonChartDataSeries(data),
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
        height: '300px',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
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
          <Text variant="error">
            {'Dai in L2s data is not available at the moment.'}
          </Text>
        ) : dataSeries.length > 0 ? (
          <ResponsiveBar
            data={dataSeries}
            role="figure"
            ariaLabel="Network comparison chart"
            barAriaLabel={function (e) {
              return (
                e.id + ': ' + e.formattedValue + ' in domain: ' + e.indexValue
              );
            }}
            keys={['optimism', 'arbitrum', 'starknet']}
            indexBy="id"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            valueFormat={(value) =>
              intl.formatNumber(value, {
                style: 'percent',
                maximumFractionDigits: 2,
                notation: 'compact'
              })
            }
            labelFormat={(value) =>
              intl.formatNumber(Number(value) * 1000, {
                maximumFractionDigits: 2,
                notation: 'compact'
              })
            }
            theme={{
              textColor: colorMode === 'light' ? '#231536' : '#fff'
            }}
            indexScale={{ type: 'band', round: true }}
            colors={({ id, data }) => String(data[id + 'Color'])}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: 32,
              format: (value: keyof typeof NetworkComparisonIndex) =>
                NetworkComparisonIndex[value]
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: -40,
              format: (value) => intl.formatNumber(value, { style: 'percent' })
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="#fff"
            legends={[
              {
                dataFrom: 'keys',
                data: [
                  {
                    id: 'optimism',
                    label: 'Optimism',
                    color: domainColor.optimism
                  },
                  {
                    id: 'arbitrum',
                    label: 'Arbitrum',
                    color: domainColor.arbitrum
                  },
                  {
                    id: 'starknet',
                    label: 'Starknet',
                    color: domainColor.starknet
                  }
                ],
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
            tooltip={(props) => {
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
                  <Box
                    as="div"
                    sx={{
                      width: '15px',
                      height: '15px',
                      backgroundColor: props.color,
                      alignSelf: 'center'
                    }}
                  />
                  <Text>
                    {(props.id as string)[0].toUpperCase() +
                      (props.id as string).split('').splice(1).join('') +
                      ':'}
                  </Text>
                  <Text variant="boldBody">{props.formattedValue}</Text>
                </Flex>
              );
            }}
          />
        ) : (
          <Skeleton height={385} style={{ borderRadius: '8px', top: '-4px' }} />
        )}
      </Fragment>
    </Flex>
  );
}
