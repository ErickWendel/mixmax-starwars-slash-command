import * as assert from 'assert';
import { Resolver } from './Resolver';
import { MixMaxRequest } from '../../_shared/DTO/MixMaxRequest';
import { promisify } from 'util';
import { constants } from '../../_shared/Util/Constants';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { ResolverResponse } from '../../_shared/DTO/MixMaxResponse';

const queryStringParameters: MixMaxRequest = {
  text: 'r2',
  user: 'erick.workspace@gmail.com',
  timezone: 'America/Los_Angeles',
};
const { text } = queryStringParameters;
let apiResult: ResolverResponse = null;
// tslint:disable-next-line:ter-prefer-arrow-callback
// tslint:disable-next-line:space-before-function-paren
describe('Resolver mappings ', function() {
  this.timeout(5000);
  this.beforeAll(async () => {
    apiResult = await Resolver.resolve(text);
  });

  it('should have an body property', async () => {
    assert.ok(typeof apiResult.body === 'string');
  });

  it('should have an HTML text at least 4 characters', async () => {
    assert.ok(apiResult.body.length > 4);
  });

  it(`should contain the R2-D2 name when passed ${text}`, async () => {
    assert.ok(apiResult.body.includes('R2-D2'));
  });
  it(`should contain the R2-D2 name and HTML template when passed ${text}`, async () => {
    const expected = {
      body:
        // tslint:disable-next-line:max-line-length
        '<br/><img src="https://www.geek.com/wp-content/uploads/2018/01/star-wars-625x352.jpg" width="300" /><br/><strong>Name</strong>: R2-D2<br/><strong>Gender</strong>: n/a',
    };
    assert.deepEqual(apiResult, expected);
  });
});
