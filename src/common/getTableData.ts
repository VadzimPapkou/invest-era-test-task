export async function getTableData(url: string) {
    const response = await fetch(url);
    const text = await response.text();
    return JSON.parse(text.replace(/NaN/g, '"NaN"').replace(/\./g, ""));
  }