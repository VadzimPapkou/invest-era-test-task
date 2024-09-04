import React from "react";
import styles from "./page.module.css";
import { Table } from "@/components/Table/Table";
import { columns } from "./columns";
import { API_URL } from "@/consts";
import { getTableData } from "@/common/getTableData";

export default async function ModelPortfolioUsa() {
  const tableData = await getTableData(API_URL + "/tables/model-portfolio-usa/");

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Компании с высокой капитализацией — рынок акций России</h1>
      <Table className={styles.table} columns={columns} data={tableData} />
    </main>
  );
}
