import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Typeahead } from './src/Typeahead';
import { constants } from './../_shared/Util/Constants';
// import { MixMaxRequest } from '../_shared/MixMaxRequest';

const handler = async ({ queryStringParameters }) => {
  console.log('event.queryStringParameters', queryStringParameters);
  if (!queryStringParameters || !queryStringParameters.text) {
    return constants.DEFAULT_RESPONSE_ENTER_SEARCH_TERM;
  }

  const text = queryStringParameters.text || queryStringParameters;
  const result = await Typeahead.resolve(text);

  return result;
};

export const main: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  console.log('**EVENT', event);

  handler(event)
    .then((result: any) => {
      const response = {
        ...constants.DEFAULT_RESPONSE,
        body: JSON.stringify(result),
      };
      console.log('**RESULT', result);
      return cb(null, response);
    })
    .catch((error: any) => {
      console.error('****ERROR', error);
      return cb(new Error('Something error happens :('));
    });
};
