import { configure } from 'axios-hooks';
import Axios from 'axios';


const axios = Axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});

configure({ axios });

export default axios;

export * from './dictionary';
