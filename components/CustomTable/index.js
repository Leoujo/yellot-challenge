import React from "react";
import { SafeAreaView, View } from "react-native";
import { Row, Rows, Table, TableWrapper } from "react-native-table-component";

export const CustomTable = ({ data }) => {
  const headers = ["Total energia gerada", "Carbono evitado", "Árvores salvas"];
  const rows = [[data.totals.kwh, data.totals.co2, data.totals.trees]];
  return (
    <Table borderStyle={{ display: "flex", alignItems: "bottom", borderWidth: 1, width: "100%" }}>
      <Row
        data={headers}
        style={{ backgroundColor: "lightgray", textAlign: "center" }}
        height={40}
        flexArr={[1, 1, 1, 1]}
        textStyle={{ textAlign: "center" }}
      />
      <TableWrapper>
        <Rows data={rows} textStyle={{ textAlign: "center", padding: 10 }} />
      </TableWrapper>
    </Table>
  );
};
