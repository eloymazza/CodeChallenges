import { useEffect, useState, useCallback } from 'react';

export const useFetch = (url: string, method?: string, payload?: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    console.log('fetching data', url);
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading };
};
