import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useGetReq = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse = await axios.get(url);
        setLoading(false);
        // console.log(response);
        setData(response.data);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.log(axiosError);
          setError(axiosError.message);
        } else {
          console.error(error);
          setError('An unexpected error occurred.');
        }
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetReq;
