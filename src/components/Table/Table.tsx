"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import styles from "./Table.module.css";
import clsx from "clsx";
import { useScrollLeft } from "@/hooks/useScrollLeft";

type TableProps = {
  data: any;
  columns: ColumnDef<any>[];
  className?: string;
};

export const Table: React.FC<TableProps> = ({ data, columns, className = "" }) => {
  columns.forEach((column) => (column.cell = Cell));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { ref, scrollLeft } = useScrollLeft();

  return (
    <div
      className={clsx(styles.table, { [className]: className })}
      style={{ "--columnsCount": columns.length } as any}
      ref={ref}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <>
          {headerGroup.headers.map((header, headerIndex) => (
            <div
              key={"header" + header.id}
              className={clsx(styles.th, {
                [styles.firstTh]: headerIndex === 0,
                [styles.shadow]: headerIndex === 0 && scrollLeft > 0,
              })}
              data-unit={header.column.columnDef.meta?.unit}
            >
              {header.column.columnDef.header?.toString()}
            </div>
          ))}
        </>
      ))}
      {table.getRowModel().rows.map((row, rowIndex) => (
        <>
          {row.getVisibleCells().map((cell, cellIndex) => (
            <div
              className={clsx(styles.td, {
                [styles.firstRowTd]: cellIndex === 0,
                [styles.shadow]: cellIndex === 0 && scrollLeft > 0,
                [styles.firstTd]: cellIndex === 0 && rowIndex === 0,
                [styles.lastRowTd]: rowIndex === table.getRowModel().rows.length - 1,
                [styles.evenRowTd]: (rowIndex + 1) % 2 === 0,
              })}
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

const Cell: React.FC<any> = (props) => {
  const isChangeIndicator = props.column.columnDef.meta?.isChangeIndicator;
  if (isChangeIndicator && props.getValue()) {
    const color = getColor(props.getValue());
    return <p className={styles[color]}>{props.getValue().slice(0, -2)}</p>;
  }
  return <p>{props.getValue()}</p>;
};

const getColor = (value: string) => (value.endsWith("▲") ? "green" : "red");
