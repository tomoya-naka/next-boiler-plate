import { useState } from 'react';
import useSWR from 'swr';

type TTest = {
  text: string;
};

//fetcher関数の作成
const fetcher = (url: string): Promise<TTest> =>
  fetch(url)
    .then((r) => r.json())
    .catch((e: any) => {
      throw new Error(e);
    });

export const useFetchTest = () => {
  const { data, error } = useSWR('/api/test', fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
