import * as ax from 'axios';
import { Response } from './../DTO/StarWarsResponse';
const {
  default: { get },
} = ax;

const MIXMAX_URL = 'https://compose.mixmax.com';

// tslint:disable-next-line:variable-name
export const variables = {
  MIXMAX_URL,
  BASE_URL: 'https://swapi.co/api/people/',
  DEFAULT_TIMEOUT: 4000,
  DEFAULT_RESPONSE: {
    statusCode: 200,
    body: null,
    headers: {
      'Access-Control-Allow-Origin': MIXMAX_URL,
      'Access-Control-Allow-Credentials': true,
    },
  },
  DEFAULT_RESPONSE_ENTER_SEARCH_TERM: [
    {
      title: '<i>(enter a search term)</i>',
      text: '',
    },
  ],
  DEFAULT_RESPONSE_NOT_FOUND_ITEM: [
    {
      title: '<i>(no results)</i>',
      text: '',
    },
  ],
};
