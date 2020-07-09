import { api } from 'groovy-auth';
import { string } from 'prop-types';
import useSWR from 'swr';

const useFetch = (url) => {
  const { data, error, mutate } = useSWR(url, async (params) => {
    const response = await api.get(params);

    return response.data;
  });

  return { data, error, mutate };
};

useFetch.propTypes = {
  url: string.isRequired,
};

export default useFetch;
