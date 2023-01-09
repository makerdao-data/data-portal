import { ResponsivePie } from '@nivo/pie';
import { useIntl } from 'next-intl';
import { Box, Flex, useColorMode } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

export type BridgeTopHoldersPieChartDataSerie = {
  id: string;
  formattedId: string;
  label: JSX.Element;
  value: number;
  color?: string;
};

type BridgeTopHoldersChartProps = {
  title: string;
  dataSeries: BridgeTopHoldersPieChartDataSerie[];
  error: Error | undefined;
};

export default function BridgeTopHoldersChart({
  title,
  dataSeries,
  error
}: BridgeTopHoldersChartProps) {
  const [colorMode] = useColorMode();
  const intl = useIntl();
  const total = dataSeries.reduce((memo, { value }) => memo + value, 0);

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
        height: '261px',
        flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'],
        alignSelf: 'flex-end',
        padding: 2
      }}>
      <Fragment>
        <Text
          variant="smallHeading"
          role="textbox"
          aria-label={title + ' pie chart title'}>
          {title}
        </Text>

        {error ? (
          <Text variant="error">
            {title + ' data is not available at the moment.'}
          </Text>
        ) : dataSeries.length > 0 ? (
          <ResponsivePie
            data={dataSeries}
            id={({ formattedId }) => formattedId}
            margin={{ top: 20, right: 0, bottom: 40, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'nivo' }}
            colorBy="indexValue"
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]]
            }}
            valueFormat={(value) =>
              intl.formatNumber(value, {
                maximumFractionDigits: 0,
                notation: 'compact'
              })
            }
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            arcLinkLabel={({ data }) => data.label}
            arcLabelsSkipAngle={15}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 10]]
            }}
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
                  <Box
                    as="div"
                    sx={{
                      width: '15px',
                      height: '15px',
                      backgroundColor: datum.color,
                      alignSelf: 'center'
                    }}
                  />
                  <Text>
                    {intl.formatNumber(datum.data.value, {
                      maximumFractionDigits: 2,
                      notation: 'compact'
                    })}
                  </Text>
                  <Text variant="boldBody">{`(${intl.formatNumber(
                    datum.data.value / total,
                    {
                      style: 'percent',
                      maximumFractionDigits: 2,
                      notation: 'compact'
                    }
                  )})`}</Text>
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
