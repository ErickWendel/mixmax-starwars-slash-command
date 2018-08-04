import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Resolver } from './src/Resolver';
import { util } from '../_shared/Util';
export const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  console.log('event.queryStringParameters', event.queryStringParameters);
  const result = Resolver.resolve(event.queryStringParameters);
  const response = {
    ...util.envirounment.DEFAULT_RESPONSE,
    body: JSON.stringify(result),
  };

  cb(null, response);
};
