import useAxios from "axios-hooks"

export const useDictionary = (word = '') => {
  const [response, refetch] = useAxios({
    url: '/define',
    method: 'GET',
    params: {
      term: word,
    },
  });

  return [response, refetch];
};
