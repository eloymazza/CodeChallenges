import { useState } from 'react';
import { get } from '../services/fetch';
import { User } from '../types/types';

type Data = {
  results?: ApiUSer[];
};

type ApiUSer = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};

const parseData = (data: Data | null): User | null => {
  if (!data || !data.results || data.results.length === 0) return null;
  const user = data.results[0];
  const { name, picture } = user;
  return {
    name: `${name.title} ${name.first} ${name.last}`,
    pictureURL: picture.thumbnail,
  };
};

const USER_API_URL = 'https://randomuser.me/api';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const { data } = await get<Data>(USER_API_URL);
    if (!data || data instanceof Error) return;

    const parsedData = parseData(data);
    if (parsedData) setUsers([...users, parsedData]);

    setIsLoading(false);
  };

  return { users, isLoading, fetchUser };
};

export default useUsers;
