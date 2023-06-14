import { useState, useEffect } from "react";
import axios from "axios";

const token = "HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF";

const useFetch = (dataType = "yearly") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023?dataType=${dataType}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Opsie, error!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // The most important part of the useFetch is return data
  return { data, isLoading, error };
};

export default useFetch;
