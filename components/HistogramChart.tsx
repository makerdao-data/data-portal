import { useTheme } from '@makerdao-dicu/makerdao-ui';
import {
  createChart,
  DeepPartial,
  HistogramData,
  WhitespaceData,
  ChartOptions,
  SeriesOptionsCommon,
  HistogramStyleOptions
} from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Box, BoxProps } from 'theme-ui';

export type HistogramDataSerie = {
  data: HistogramData[] | WhitespaceData[];
  styleOptions?: DeepPartial<SeriesOptionsCommon & HistogramStyleOptions>;
};

type HistogramChartProps = {
  dataSeries: HistogramDataSerie[];
  chartOptions: DeepPartial<ChartOptions>;
  title?: string;
} & BoxProps;

export default function HistogramChart({
  dataSeries,
  chartOptions,
  title,
  ...props
}: HistogramChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>();
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth
      });
    };

    const chart = createChart(chartContainerRef.current || '', chartOptions);
    chart.timeScale().fitContent();

    for (const dataSerie of dataSeries) {
      const newSeries = chart.addHistogramSeries({
        ...dataSerie.styleOptions
      });

      newSeries.setData(dataSerie.data);
    }

    if (title) {
      const prevTooltip = document.getElementById('tooltip-' + { title });
      const node = document.getElementById(title);

      if (prevTooltip && node) {
        node.removeChild(prevTooltip);
      }

      const toolTip = document.createElement('div');
      toolTip.setAttribute('id', 'tooltip-' + { title });

      chartContainerRef.current?.appendChild(toolTip);

      toolTip.style.position = 'absolute';
      toolTip.style.display = 'block';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      toolTip.style.fontWeight = theme?.fontWeights?.heading || '700';
      toolTip.style.top = '0';
      toolTip.style.left = '0';
      toolTip.style.backgroundColor = 'transparent';
      toolTip.style.zIndex = '1';
      toolTip.innerHTML = `<div style="font-size: ${theme.fontSizes?.[6]}; color: ${theme.colors?.text};">${title}</div>`;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [chartOptions, chartOptions.height, dataSeries, theme, title]);

  return (
    <Box
      role="graphics-doc"
      as="div"
      ref={chartContainerRef}
      id={title}
      sx={{ position: 'relative' }}
      {...props}
    />
  );
}
