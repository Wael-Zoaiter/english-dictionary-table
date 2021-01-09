import { configure } from 'axios-hooks';
import Axios from 'axios';


const axios = Axios.create({
  baseURL: 'https://mashape-community-urban-dictionary.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'd3e93ee43fmsh3f15db07c2f6046p14a29bjsn5818f0ae2ffc',
    'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
	  'useQueryString': true,
  },
});

configure({ axios });

export default axios;

export * from './dictionary';
