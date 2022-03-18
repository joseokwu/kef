import React, { useEffect, useState } from "react";
import { baseInstanceAPI } from "../axios";

const useFetchData = (url, value) => {
  const [data, error] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await baseInstanceAPI.post(url, {
        data: value,
      });

      console.log();
    };
  }, [url]);

  return { data, error };
};

export default useFetchData;
