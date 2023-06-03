import { useFetch } from './useFetch';

type Data = {
  results?: User[];
};

type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};

type ParsedUser = {
  name: string;
  pictureURL: string;
};

const parseData = (data: Data | null): ParsedUser | null => {
  if (!data || !data.results || data.results.length === 0) return null;
  const user = data.results[0];
  const { name, picture } = user;
  return {
    name: `${name.title} ${name.first} ${name.last}`,
    pictureURL: picture.thumbnail,
  };
};

const USER_API_URL = 'https://randomuser.me/api';

const useUser = () => {
  const { data } = useFetch(USER_API_URL);
  const user = parseData(data);
  return user;
};

export default useUser;
