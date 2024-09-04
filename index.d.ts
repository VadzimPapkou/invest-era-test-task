import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta {
    unit?: string;
    isChangeIndicator?: boolean;
  }
}
