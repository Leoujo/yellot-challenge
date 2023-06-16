import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import useFetch from "../hook/useFetch";
import { Chart } from "../components/Chart";
import { CustomTable } from "../components/CustomTable";
import { FilterPicker } from "../components/FilterPicker";
import { useState } from "react";

const Home = () => {
  const [filterOption, setFilterOption] = useState("monthly");
  const { data, isLoading, error } = useFetch(filterOption);

  const filterHandler = (type) => {
    if (type !== null) {
      setFilterOption(type);
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Error! Try again later.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {!isLoading && data ? (
        <>
          <FilterPicker filterOption={filterOption} filterHandler={filterHandler} />
          <Chart data={data} />
          <CustomTable data={data} />
        </>
      ) : (
        <ActivityIndicator size="large" />
      )}
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
