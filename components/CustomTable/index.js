import React from "react";
import { Row, Rows, Table, TableWrapper } from "react-native-table-component";

export const CustomTable = ({ data }) => {
  const headers = ["Total energia gerada", "Carbono evitado", "Árvores salvas"];
  const rows = [[data.totals.kwh + " kWh", data.totals.co2, data.totals.trees]];
  return (
    <Table borderStyle={{ display: "flex", alignItems: "bottom", borderWidth: 1, width: "100%" }}>
      <Row
        data={headers}
        style={{ backgroundColor: "#6c85bd", textAlign: "center" }}
        height={40}
        flexArr={[1, 1, 1, 1]}
        textStyle={{ textAlign: "center", color: "white" }}
      />
      <TableWrapper>
        <Rows data={rows} textStyle={{ textAlign: "center", padding: 10 }} style={{}} />
      </TableWrapper>
    </Table>
  );
};
