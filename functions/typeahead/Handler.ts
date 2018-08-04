import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Typeahead } from './src/Typeahead';
import { util } from './../_shared/Util';

const handler = async ({ queryStringParameters }) => {
  console.log('event.queryStringParameters', queryStringParameters);
  if (!queryStringParameters) {
    return util.envirounment.DEFAULT_RESPONSE_ENTER_SEARCH_TERM;
  }

  const text = queryStringParameters.text || queryStringParameters;
  const result = await Typeahead.resolve(text);

  return result;
};

export const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  console.log('**EVENT', event);

  handler(event)
    .then((result: any) => {
      const response = {
        body: JSON.stringify(result),
        ...util.envirounment.DEFAULT_RESPONSE,
      };

      return cb(null, result);
    })
    .catch((error: any) => {
      console.error('****ERROR', error);
      return cb(new Error('Something error happens :('));
    });
};
