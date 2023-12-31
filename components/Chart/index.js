import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import moment from "moment";

export const Chart = ({ data }) => {
  const isGeneratingEnergyToday = () => {
    var today = moment(new Date()).format("YYYY-MM-DD");
    if (!data.x_labels.includes(today.toString())) {
      return "não";
    }
    return null;
  };

  return (
    <>
      <Text style={styles.header}>Geração de energia X tempo</Text>
      <Text style={styles.subHeader}>{`A minha usina ${isGeneratingEnergyToday()} está gerando hoje`}</Text>
      <LineChart
        verticalLabelRotation={90} //Degree to rotate
        data={{
          labels: data.x_labels,
          datasets: [
            {
              data: data.generation,
              strokeWidth: 1,
              color: () => "#6c85bd",
            },
            {
              data: data.expected,
              strokeWidth: 1,
              color: () => "#002f5c",
            },
          ],
          legend: ["gerado", "esperado"],
        }}
        width={Dimensions.get("window").width - 16}
        height={500}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#fff",
          backgroundGradientToOpacity: 0.5,

          fillShadowGradient: "#ccc",
          fillShadowGradientOpacity: 0,
          color: (opacity = 1) => `#023047`,
          labelColor: (opacity = 1) => `#333`,
          strokeWidth: 2,
          useShadowColorFromDataset: false,
          decimalPlaces: 0,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  subHeader: {
    textAlign: "center",
    fontSize: 12,
  },
});
