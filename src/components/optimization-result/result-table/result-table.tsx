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
import { useState } from 'react';
import { Circle, Edit } from '@mui/icons-material';
import css from './result-table.module.scss';

export const ResultTable = () => {
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<OptimizationResultType>[] = [
    {
      id: 'selected',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
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
      id: 'name',
      header: () => <Typography>Наименование</Typography>,
      accessorKey: 'name',
      cell: (info) => (
        <Typography>
          {info.getValue<OptimizationResultType['name']>()}
        </Typography>
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
  ];

  const resultTable = useReactTable({
    data: mockOptimizationResultData,
    columns,
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
              <th key={header.id} colSpan={header.colSpan}>
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
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
