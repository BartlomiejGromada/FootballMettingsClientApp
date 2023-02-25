import { axios } from "@services/Axios";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface useFetchProps {
  method: "GET" | "POST" | "PUT" | "PATCH";
  path: string;
  requestData?: any;
  fetchOnStart?: boolean;
}

const useFetch = <TAxiosResponse = {}>(props: useFetchProps) => {
  const { method = "GET", path, requestData, fetchOnStart = true } = props;

  const [response, setResponse] = useState<AxiosResponse<TAxiosResponse>>();
  const [errors, setErrors] = useState("");
  const [fetch, setFetch] = useState(fetchOnStart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: method,
          url: path,
          data: requestData,
        });
        setResponse(response);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.error("Axios error", err);
          let responseErrors = "";
          for (const [, value] of Object.entries(err?.response?.data)) {
            responseErrors += `${value}\n`;
          }
          setErrors(responseErrors);
        } else {
          console.error("Error", err);
          setErrors("Something went wrong!");
        }
      }
    };
    if (fetch) fetchData();
  }, [fetch]);

  return {
    response,
    errors,
    setFetch,
  };
};

export { useFetch };
