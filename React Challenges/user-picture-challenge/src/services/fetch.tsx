import { useEffect, useState, useCallback } from 'react';

type Response<T> = {
  data: T | Error;
  status: string;
};

export const get = async <T,>(
  url: string,
  method?: string,
  payload?: string
): Promise<Response<T>> => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return {
      data: result,
      status: '200 ok',
    };
  } catch (error) {
    return {
      data: new Error('404 not found'),
      status: '404 not found',
    };
  }
};
