import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Resolver } from './src/Resolver';
export const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  console.log('event.queryStringParameters', event.queryStringParameters);
  const result = Resolver.resolve(event.queryStringParameters);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://compose.mixmax.com',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(result),
  };

  cb(null, response);
};
