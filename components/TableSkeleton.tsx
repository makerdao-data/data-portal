import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

type TableSkeletonProps = {
  rows: number;
  cols: number;
};

export default function TableSkeleton({
  rows = 1,
  cols = 1
}: TableSkeletonProps) {
  const rowsArray = new Array(rows).fill(0);
  const colsArray = new Array(cols).fill(0);

  return (
    <Fragment>
      {rowsArray.map(() => (
        <tr key={Math.random()}>
          {colsArray.map(() => (
            <td key={Math.random()}>
              <Skeleton />
            </td>
          ))}
        </tr>
      ))}
    </Fragment>
  );
}
