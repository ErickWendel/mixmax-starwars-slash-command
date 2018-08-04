import * as assert from 'assert';
import { constants } from './../util/Constants';
import { Request } from './Request';

const timeout = constants.DEFAULT_TIMEOUT;
const request = new Request<any>();
// tslint:disable-next-line:ter-prefer-arrow-callback
// tslint:disable-next-line:space-before-function-paren
describe('Request helpers', function() {
  this.timeout(5000);

  it(`should be a timeout error when the function has more time than ${timeout}`, async () => {
    try {
      const fn = () =>
        new Promise(resolve => setTimeout(() => resolve, timeout * 2));
      await request.race('testing.com', fn);
    } catch (error) {
      assert.ok(error.message.includes('timeout'));
    }
  });
  it(`should return ok when promise time it is ok`, async () => {
    const expected = 'OK';
    const fn = () =>
      new Promise(resolve => setTimeout(() => resolve(expected), timeout / 4));
    const result = await request.race('testing.com', fn);
    assert.equal(result, expected);
  });
});
