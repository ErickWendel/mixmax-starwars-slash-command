import { TypeaheadResponse } from '../DTO/MixMaxResponse';

const MIXMAX_URL = 'https://compose.mixmax.com';

// tslint:disable-next-line:variable-name
export const constants = {
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
    <TypeaheadResponse>{
      title: '<i>(enter a search term)</i>',
      text: '',
    },
  ],
  DEFAULT_RESPONSE_NOT_FOUND_ITEM: [
    <TypeaheadResponse>{
      title: '<i>(no results)</i>',
      text: '',
    },
  ],
};
