import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import useFetch from "../hook/useFetch";
import { Chart } from "../components/Chart";
import { CustomTable } from "../components/CustomTable";
import { FilterPicker } from "../components/FilterPicker";
import { useState } from "react";

const Home = () => {
  const [filterOption, setFilterOption] = useState("monthly");
  const { data, isLoading, error } = useFetch(filterOption);
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error || !data) {
    return <Text>Error! Try again later.</Text>;
  }
  return (
    <View style={styles.container}>
      <FilterPicker filterOption={filterOption} setFilterOption={setFilterOption} />
      <Chart data={data} />
      <CustomTable data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Home;
