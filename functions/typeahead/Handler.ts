import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Typeahead } from './src/Typeahead';
import { UTIL } from '../_shared/Util';

export const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  // console.log('**EVENT', event);
  console.log('event.queryStringParameters', event.queryStringParameters);
  // if (!event.queryStringParameters) {
  //   return cb(null, {
  //     body: JSON.stringify([
  //       {
  //         title: '<i>(enter a search term)</i>',
  //         text: '',
  //       },
  //     ]),
  //   });
  // }

  // const text = event.queryStringParameters.text || event.queryStringParameters;
  Typeahead.resolve('r2d2')

    .then((result: any) => {
      const response = {
        statusCode: 200,
        // ...UTIL.DEFAULT_RESPONSE,
        body: JSON.stringify(result),
        headers: {
          'Access-Control-Allow-Origin': 'https://compose.mixmax.com',
          'Access-Control-Allow-Credentials': true,
        },
      };

      return cb(null, response);
    })

    .catch((error: any) => {
      console.error('****ERROR', error);
      return cb(new Error('Something error happens :('));
    });
};
