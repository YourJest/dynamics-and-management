import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import {
  mockOptimizationResultData,
  type OptimizationResultType,
} from '../../../mocks/optimization-result';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Circle, Edit } from '@mui/icons-material';
import css from './result-table.module.scss';
import clsx from 'clsx';

const stageStyles = {
  1: css.stageOne,
  2: css.stageTwo,
  3: css.stageThree,
};

const yearWithStageStyles: { [key in number]: string } = {
  1: css.yearStageOne,
  2: css.yearStageTwo,
  3: css.yearStageThree,
};

const stageText = {
  1: '1П',
  2: '2Р',
  3: '3И',
};

const cellColorByType: { [key in string]: string } = {
  searchStart: css.searchStart,
  explorationStart: css.explorationStart,
  investmentStart: css.investmentStart,
  productionStart: css.productionStart,
};

// TODO Это должно лежать где-нибудь в сторе
interface ResultTableProps {
  incomeLength?: number;
}

export const ResultTable = ({ incomeLength = 10 }: ResultTableProps) => {
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<OptimizationResultType>[] = useMemo(
    () => [
      {
        id: 'selected',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              '&.Mui-checked': {
                color: theme.palette.primary.contrastText,
              },
              '&.MuiCheckbox-indeterminate': {
                color: theme.palette.primary.contrastText,
              },
            })}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        id: 'result',
        header: () => <Typography>Результат</Typography>,
        accessorKey: 'result',
        cell: (info) => (
          <Circle
            color={
              info.getValue<OptimizationResultType['result']>() === 'good'
                ? 'success'
                : 'error'
            }
          />
        ),
      },
      {
        id: 'stage',
        header: () => <Typography>Этап</Typography>,
        accessorKey: 'stage',
        cell: (info) => (
          <Typography
            className={clsx(
              css.stage,
              stageStyles[info.getValue<OptimizationResultType['stage']>()]
            )}>
            {stageText[info.getValue<OptimizationResultType['stage']>()]}
          </Typography>
        ),
      },
      {
        id: 'name',
        header: () => <Typography>Наименование</Typography>,
        accessorKey: 'name',
        cell: (info) => (
          <Typography>
            {info.getValue<OptimizationResultType['name']>()}
          </Typography>
        ),
        footer: ({ table }) => (
          <Typography>{`Итого (кол-во объектов ${table.getRowCount()}):`}</Typography>
        ),
      },
      {
        id: 'edit',
        header: () => <Typography>Ред.</Typography>,
        cell: () => (
          <IconButton>
            <Edit />
          </IconButton>
        ),
      },
      {
        id: 'searchStart',
        accessorKey: 'searchStart',
        header: () => <Typography>Начало поиска</Typography>,
        cell: (info) => (
          <Typography>
            {info.getValue<OptimizationResultType['searchStart']>()}
          </Typography>
        ),
      },
      {
        id: 'explorationStart',
        accessorKey: 'explorationStart',
        header: () => <Typography>Начало разведки</Typography>,
        cell: (info) => (
          <Typography>
            {info.getValue<OptimizationResultType['explorationStart']>()}
          </Typography>
        ),
      },
      {
        id: 'investmentStart',
        accessorKey: 'investmentStart',
        header: () => <Typography>Начало инвестиций</Typography>,
        cell: (info) => (
          <Typography>
            {info.getValue<OptimizationResultType['investmentStart']>()}
          </Typography>
        ),
      },
      {
        id: 'productionStart',
        accessorKey: 'productionStart',
        header: () => <Typography>Начало добычи</Typography>,
        cell: (info) => (
          <Typography>
            {info.getValue<OptimizationResultType['productionStart']>()}
          </Typography>
        ),
      },
    ],
    []
  );

  const incomeTotalColumn: ColumnDef<OptimizationResultType>[] = useMemo(
    () => [
      {
        id: 'incomeTotal',
        accessorFn: (row) =>
          row.income
            .slice(0, incomeLength)
            .reduce((prev, current) => (prev += current)),
        header: () => <Typography>ИТОГО</Typography>,
        cell: (info) => <Typography>{info.getValue<number>()}</Typography>,
        footer: ({ table }) => (
          <Typography>
            {table
              .getFilteredRowModel()
              .rows.reduce(
                (total, row) => total + row.getValue<number>('incomeTotal'),
                0
              )}
          </Typography>
        ),
      },
    ],
    [incomeLength]
  );

  const incomeColumns: ColumnDef<OptimizationResultType>[] = useMemo(
    () =>
      Array.from({ length: incomeLength }, (_, i) => ({
        id: `income-${2025 + i}`,
        accessorFn: (row) => `${row.income[i]}`,
        header: () => <Typography>{2025 + i}</Typography>,
        cell: (info) => <Typography>{info.getValue<string>()}</Typography>,
        footer: ({ table }) => (
          <Typography>
            {table
              .getFilteredRowModel()
              .rows.reduce(
                (total, row) =>
                  total + Number(row.getValue<string>(`income-${2025 + i}`)),
                0
              )}
          </Typography>
        ),
      })),
    [incomeLength]
  );

  const resultTable = useReactTable({
    data: mockOptimizationResultData,
    columns: [...columns, ...incomeTotalColumn, ...incomeColumns],
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={css.ResultTable}>
      <thead>
        {resultTable.getHeaderGroups().map((headerGroup) => (
          <tr className={css.headerRow} key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={clsx(header.id === 'name' && css.nameColumn)}>
                <>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={css.tableBody}>
        {resultTable.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td
                  key={cell.id}
                  className={clsx(
                    cellColorByType[cell.column.id],
                    cell.id.includes('income-') &&
                      yearWithStageStyles[row.getValue<number>('stage')]
                  )}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {resultTable.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id} className={css.footerRow}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
