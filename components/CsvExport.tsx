import React, { useState, useEffect, useRef, Fragment, ReactNode } from 'react';
import { CSVLink } from 'react-csv';
import { DownloadIcon } from '@makerdao-dicu/makerdao-ui';
import {
  Data as ReactCsvData,
  Headers as ReactCsvHeaders
} from 'react-csv/components/CommonPropTypes';
import { Box, ThemeUIStyleObject } from 'theme-ui';

export type CsvData = {
  data: ReactCsvData;
  headers?: ReactCsvHeaders;
  filename?: string;
};

type CsvExportProps = {
  exportMethod: (() => Promise<CsvData>) | (() => CsvData);
  children?: ReactNode;
  disable?: boolean;
  sx?: {
    container: ThemeUIStyleObject;
  };
  icon?: {
    width?: number;
    height?: number;
    color?: string;
  };
};

const CsvExport = ({
  exportMethod,
  children,
  disable,
  sx,
  icon
}: CsvExportProps) => {
  const [csvData, setCsvData] = useState<CsvData | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const csvInstance = useRef<any | null>(null);

  useEffect(() => {
    if (csvData && csvInstance.current && csvInstance.current.link) {
      setTimeout(() => {
        csvInstance.current.link.click();
        setCsvData(null);
      });
    }
  }, [csvData]);

  return (
    <Fragment>
      <Box
        as="div"
        onClick={async () => {
          if (disable) {
            return;
          }
          const newCsvData = await exportMethod();
          setCsvData(newCsvData);
        }}
        sx={{ cursor: 'pointer', height: '24px', ...sx?.container }}>
        {children ?? <DownloadIcon {...icon} />}
      </Box>

      {csvData ? (
        <CSVLink
          data={csvData.data}
          headers={csvData.headers}
          filename={csvData.filename}
          ref={csvInstance}
        />
      ) : null}
    </Fragment>
  );
};

export default CsvExport;
