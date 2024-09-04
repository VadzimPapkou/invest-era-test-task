import { ColumnDef } from "@tanstack/react-table";

type DataType = {
  компания: string;
  тикер: string;
  сектор: string;
  доля: string;
  "Текущая цена": string;
  "Точка входа": string;
  Потенциал: string;
  "Уровень риска": string;
  "Ср-срочн потенциал": string;
  Дивиденды: string;
  "Потенциал роста": string;
  "Долгосрочный потенциал роста": string;
  "FWD P/E": string;
  "Sales 5 past years": string;
};

export const columns: ColumnDef<DataType, string>[] = [
  {
    accessorKey: "компания",
    header: "Компания",
  },
  {
    accessorKey: "тикер",
    header: "Тикер",
  },
  {
    accessorKey: "сектор",
    header: "Сектор",
  },
  {
    accessorKey: "доля",
    header: "Доля",
  },
  {
    accessorKey: "Текущая цена",
    header: "Текущая цена",
  },
  {
    accessorKey: "Точка входа",
    header: "Точка входа",
  },
  {
    accessorKey: "Потенциал",
    header: "Потенциал",
  },
  {
    accessorKey: "Уровень риска",
    header: "Уровень риска",
  },
  {
    accessorKey: "Ср-срочн потенциал",
    header: "Среднесрочный потенциал",
  },
  {
    accessorKey: "Дивиденды",
    header: "Дивиденды",
    meta: { isChangeIndicator: true },
  },
  {
    accessorKey: "Потенциал роста",
    header: "Потенциал роста",
    meta: { isChangeIndicator: true },
  },
  {
    accessorKey: "Долгосрочный потенциал роста",
    header: "Долгосрочный потенциал роста",
    meta: { isChangeIndicator: true },
  },
  {
    accessorKey: "FWD P/E",
    header: "FWD P/E",
  },
  {
    accessorKey: "Sales 5 past years",
    header: "Продажи за последние 5 лет",
  },
];
