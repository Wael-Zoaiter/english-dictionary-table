import useAxios from "axios-hooks"

export const useDictionary = (word = '', config = {}) => {
  return useAxios({
    url: `${word}`,
    method: 'GET',
  }, config);
};
