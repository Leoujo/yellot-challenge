import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ActivityIndicator } from "react-native";

import useFetch from "../../hook/useFetch";
import moment from "moment";

export const Chart = () => {
  const { data, isLoading, error } = useFetch("daily");

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error || !data) {
    return <Text>Error! Try again later.</Text>;
  }

  const showOnlyDay = (value) => {
    for (var i in value) {
      value[i] = value[i].split("-")[2];
    }
    let onlyEvenDays = [];
    onlyEvenDays = value.filter((v) => v % 2 == 0);
    return onlyEvenDays;
  };

  return (
    <>
      <Text style={styles.header}>Generation in {moment(data.x_labels[0]).format("MM-YYYY")}</Text>
      <LineChart
        data={{
          labels: showOnlyDay(data.x_labels),
          datasets: [
            {
              data: data.generation,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
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
});
