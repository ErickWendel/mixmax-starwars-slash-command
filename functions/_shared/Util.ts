export const UTIL = {
  BASE_URL: 'https://swapi.co/api/people/',
  MIXMAX_URL: '',
  DEFAULT_RESPONSE: {
    statusCode: 200,
    body: null,
    headers: {
      'Access-Control-Allow-Origin': this.MIXMAX_URL,
      'Access-Control-Allow-Credentials': true,
    },
  },
};
