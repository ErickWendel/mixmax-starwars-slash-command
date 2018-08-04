import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Resolver } from './src/Resolver';
import { util } from './../_shared/Util';

const handler = async ({ queryStringParameters }) => {
  console.log('event.queryStringParameters', queryStringParameters);
  if (!queryStringParameters) {
    return util.envirounment.DEFAULT_RESPONSE_ENTER_SEARCH_TERM;
  }

  const text = queryStringParameters.text || queryStringParameters;
  const result = await Resolver.resolve(text);

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
        ...util.envirounment.DEFAULT_RESPONSE,
        body: JSON.stringify(result),
      };
      console.log('**RESULT', response);

      return cb(null, response);
    })
    .catch((error: any) => {
      console.error('****ERROR', error);
      return cb(new Error('Something error happens :('));
    });
};
