import * as ax from 'axios';
import { Response } from './../DTO/StarWarsResponse';
const {
  default: { get },
} = ax;

const mixmaxUrl = 'https://compose.mixmax.com';

export const util = {
  UNPLASH: {
    key: '0c714ffd7c1633e9b10096cc563e5ebc683e381460a9dea8b37479f428ce4e43',
    secret: '98a10267e7bc165e0687f2923695c9c8dfbe9467e944784e30d6917af7169b2d',
  },
  BASE_URL: 'https://swapi.co/api/people/',
  MIXMAX_URL: '',
  DEFAULT_TIMEOUT: 2000,
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
};
