import { Box, Flex, useColorMode } from 'theme-ui';
import { Text, AreaChart } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import summaryData from '../../fixtures/summary.json';
import { useIntl } from 'next-intl';
import AmountCard from './components/AmountCard';

export default function Overview() {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Text variant="muted">
        Last refresh (delay): 15983125 block (107 blocks) / 2022-11-16 14:16:59
        UTC (21 mins)
      </Text>

      <Text variant="smallHeading">DAI in L2s</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'nowrap', 'nowrap'] }}>
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 3,
            flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
            maxWidth: ['100%', '100%', '280px']
          }}>
          <AmountCard
            title="DAI Supply"
            value={summaryData.supply_circulating.total}
            change={
              ((summaryData.supply_circulating_7.total -
                summaryData.supply_circulating.total) /
                summaryData.supply_circulating_7.total) *
              -1
            }
          />

          <AmountCard
            title="DAI Weekly transfer volume"
            value={summaryData.l2_weekly_transfers_volume.total}
            change={
              ((summaryData.l2_weekly_transfers_volume_2.total -
                summaryData.l2_weekly_transfers_volume.total) /
                summaryData.l2_weekly_transfers_volume_2.total) *
              -1
            }
          />

          <AmountCard
            title="Weekly transfers"
            value={summaryData.l2_weekly_transfers_count.total}
            change={
              ((summaryData.l2_weekly_transfers_count_2.total -
                summaryData.l2_weekly_transfers_count.total) /
                summaryData.l2_weekly_transfers_count_2.total) *
              -1
            }
          />
        </Flex>

        <Box
          sx={{
            ['.tv-lightweight-charts']: {
              border: '1px solid',
              borderColor: 'secondary',
              borderRadius: '8px'
            },
            height: '400px',
            flex: ['1 1 100%', '1 1 0%', '1 1 0%']
          }}>
          <AreaChart
            dataSeries={dataSeries}
            chartOptions={{
              layout: {
                background: {
                  type: ColorType.Solid,
                  color: colorMode === 'light' ? '#F6F8F9' : '#141414'
                },
                textColor: colorMode === 'light' ? '#231536' : '#fff'
              },
              grid: {
                vertLines: {
                  visible: false
                },
                horzLines: {
                  visible: false
                }
              },
              height: 383,
              localization: {
                priceFormatter: (value: number) =>
                  intl.formatNumber(value, { maximumFractionDigits: 2 })
              }
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

const dataSeries = [
  {
    colors: {
      backgroundColor: 'white',
      lineColor: '#2962FF',
      textColor: 'text',
      areaTopColor: '#2962FF',
      areaBottomColor: 'rgba(41, 98, 255, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.OPTIMISM)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.OPTIMISM[
            key as keyof typeof summaryData.total_supply.OPTIMISM
          ]
        )
      )
      .map((key) => ({
        time: key,
        value: summaryData.total_supply.OPTIMISM[
          key as keyof typeof summaryData.total_supply.OPTIMISM
        ] as number
      }))
  },
  {
    colors: {
      backgroundColor: 'white',
      lineColor: '#ff818f',
      textColor: 'text',
      areaTopColor: '#ff818f',
      areaBottomColor: 'rgba(255, 125, 130, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.ARBITRUM)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.ARBITRUM[
            key as keyof typeof summaryData.total_supply.ARBITRUM
          ]
        )
      )
      .map((key) => ({
        time: key,
        value:
          summaryData.total_supply.ARBITRUM[
            key as keyof typeof summaryData.total_supply.ARBITRUM
          ]
      }))
  },
  {
    colors: {
      backgroundColor: 'white',
      lineColor: '#9191b0',
      textColor: 'text',
      areaTopColor: '#9191b0',
      areaBottomColor: 'rgba(126, 125, 161, 0.28)'
    },
    data: Object.keys(summaryData.total_supply.STARKNET)
      .filter((key) =>
        Boolean(
          summaryData.total_supply.STARKNET[
            key as keyof typeof summaryData.total_supply.STARKNET
          ]
        )
      )
      .map((key) => ({
        time: key,
        value:
          summaryData.total_supply.STARKNET[
            key as keyof typeof summaryData.total_supply.STARKNET
          ]
      }))
  }
];
