import * as assert from 'assert';
import { Resolver } from './Resolver';
import { MixMaxRequest } from '../../_shared/DTO/MixMaxRequest';
import { promisify } from 'util';
import { util } from '../../_shared/Util/Util';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { ResolverResponse } from '../../_shared/DTO/MixMaxResponse';

const queryStringParameters: MixMaxRequest = {
  text: 'r2',
  user: 'erick.workspace@gmail.com',
  timezone: 'America/Los_Angeles',
};

let apiResult: ResolverResponse = null;
// tslint:disable-next-line:ter-prefer-arrow-callback
// tslint:disable-next-line:space-before-function-paren
describe('Resolver mappings ', function() {
  this.timeout(5000);
  this.beforeAll(async () => {
    const { text } = queryStringParameters;
    apiResult = await Resolver.resolve(text);
  });

  it('should have an body property', async () => {
    assert.ok(typeof apiResult.body === 'string');
  });

  it('should have an HTML text least 4 characters', async () => {
    assert.ok(apiResult.body.length > 4);
  });

  it('should contain the R2-D2 name when passed r2', async () => {
    assert.ok(apiResult.body.includes('R2-D2'));
  });
  it('should contain the R2-D2 name and HTML template when passed r2', async () => {
    const { text } = queryStringParameters;
    const expected = {
      body: Resolver.toHtmlTemplate(<People>{ name: 'R2-D2' }),
    };

    assert.deepEqual(apiResult, expected);
  });
});
