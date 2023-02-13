import { ResponsiveBar } from '@nivo/bar';
import { Box, Flex, useColorMode } from 'theme-ui';
import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useIntl } from 'next-intl';
import { BridgeDaiComparisionBarChartData } from '../../utils/data-transformers/create-bridge-dai-distributin-bar-chart-data';

type BridgeDaiDistributionBarChartProps = {
  title: string;
  data: BridgeDaiComparisionBarChartData;
  error: Error | undefined;
};

export default function BridgeDaiDistributionBarChart({
  title,
  data,
  error
}: BridgeDaiDistributionBarChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();
  const { theme } = useTheme();

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '300px',
        width: '100%',
        flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'],
        alignSelf: 'flex-end'
      }}>
      <Fragment>
        <Text
          variant="smallHeading"
          role="heading"
          aria-label={title + ' comparison title'}>
          {title}
        </Text>

        {error ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {title + ' data is not available at the moment.'}
          </Text>
        ) : data.dataSeries.length > 0 ? (
          <ResponsiveBar
            data={data.dataSeries}
            role="figure"
            ariaLabel={title + ' chart'}
            keys={data.dataSeries.map(({ id }) => String(id))}
            indexBy="id"
            margin={{ top: 20, right: 0, bottom: 70, left: 20 }}
            padding={0}
            valueScale={{ type: 'symlog' }}
            indexScale={{ type: 'band', round: true }}
            // colors="transparent"
            borderColor={{
              from: 'color',
              modifiers: [
                ['darker', 0.6],
                ['opacity', 1]
              ]
            }}
            borderWidth={1}
            colors={{ scheme: 'red_yellow_green' }}
            colorBy="indexValue"
            labelTextColor="#fff"
            theme={{
              textColor: colorMode === 'light' ? '#231536' : '#fff',
              legends: {
                text: {
                  fontSize: theme.fontSizes?.[3]
                }
              },
              labels: {
                text: {
                  fontSize: theme.fontSizes?.[4],
                  fontWeight: 500
                }
              },
              axis: {
                ticks: {
                  text: {
                    fontSize: theme.fontSizes?.[3]
                  }
                }
              },
              grid: {
                line: {
                  strokeWidth: 0.5
                }
              }
            }}
            axisTop={null}
            axisRight={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            enableGridY={false}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -35,
              legendPosition: 'middle',
              legendOffset: 32,
              format: (value: keyof typeof data.categoryMapping) =>
                data.categoryMapping[value]
            }}
            axisLeft={null}
            valueFormat={(value) =>
              intl.formatNumber(value, {
                style: 'percent',
                maximumFractionDigits: 0,
                notation: 'compact'
              })
            }
            labelFormat={(value) =>
              intl.formatNumber(Number(value) * 1000, {
                maximumFractionDigits: 0,
                notation: 'compact'
              })
            }
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
                  <Text>{data.categoryMapping[props.id] + ':'}</Text>
                  <Text variant="boldBody">
                    {intl.formatNumber(Number(props.data.value))}
                  </Text>
                </Flex>
              );
            }}
          />
        ) : (
          <Skeleton height={220} style={{ borderRadius: '8px', top: '-4px' }} />
        )}
      </Fragment>
    </Flex>
  );
}
