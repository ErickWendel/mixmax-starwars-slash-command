import * as ax from 'axios';
import { Response } from './StarWarsResponse';
const {
  default: { get },
} = ax;

const mixmaxUrl = 'https://compose.mixmax.com';

export const util = {
  envirounment: {
    BASE_URL: 'https://swapi.co/api/people/',
    MIXMAX_URL: '',
    DEFAULT_RESPONSE: {
      statusCode: 200,
      body: null,
      headers: {
        'Access-Control-Allow-Origin': mixmaxUrl,
        'Access-Control-Allow-Credentials': true,
      },
    },
    DEFAULT_RESPONSE_ENTER_SEARCH_TERM: [
      {
        title: '<i>(enter a search term)</i>',
        text: '',
      },
    ],
  },
};
