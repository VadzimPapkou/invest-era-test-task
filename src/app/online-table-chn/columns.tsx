import { ColumnDef } from "@tanstack/react-table";

type DataType = {
  Название: string;
  Тикер: string;
  Сектор: string;
  Отрасль: string;
  "Уровень риска": string;
  "Ср-срочн. потенциал": string;
  "Текущая цена": string;
  "Точка входа": string;
  "Точка входа $": string;
  Потенциал: string;
  "Долгосрочный потенциал": string;
  Валюта: string;
  "Потенциал роста": string;
  "Долгосрочный потенциал роста": string;
};

export const columns: ColumnDef<DataType, string>[] = [
  {
    accessorKey: "Название",
    header: "Название",
  },
  {
    accessorKey: "Тикер",
    header: "Тикер",
  },
  {
    accessorKey: "Сектор",
    header: "Сектор",
  },
  {
    accessorKey: "Отрасль",
    header: "Отрасль",
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
    accessorKey: "Текущая цена",
    header: "Текущая цена",
  },
  {
    accessorKey: "Точка входа",
    header: "Точка входа",
  },
  {
    accessorKey: "Точка входа $",
    header: "Точка входа",
  },
  {
    accessorKey: "Потенциал",
    header: "Потенциал",
  },
  {
    accessorKey: "Долгосрочный потенциал",
    header: "Долгосрочный потенциал",
  },
  {
    accessorKey: "Валюта",
    header: "Валюта",
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
];