import { Text, View, StyleSheet } from "react-native";
import useFetch from "../hook/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch();
  
  console.log(data)
  return (
    <View style={styles.container}>
		{!isLoading ? <Text>Carregou</Text> : <Text>Carregando...</Text>}  
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
