import { Text, View, StyleSheet } from "react-native";
import useFetch from "../hook/useFetch";
import { Chart } from "../components/Chart";

const Home = () => {
  return (
    <View style={styles.container}>
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
