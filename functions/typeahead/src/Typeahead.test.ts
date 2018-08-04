import * as assert from 'assert';
import { Typeahead } from './Typeahead';
import { MixMaxRequest } from '../../_shared/DTO/MixMaxRequest';
import { promisify } from 'util';
import { util } from '../../_shared/Util/Util';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { TypeaheadResponse } from '../../_shared/DTO/MixMaxResponse';

const queryStringParameters: MixMaxRequest = {
  text: 'r2',
  user: 'erick.workspace@gmail.com',
  timezone: 'America/Los_Angeles',
};

let apiResult: TypeaheadResponse[] = null;
// tslint:disable-next-line:ter-prefer-arrow-callback
// tslint:disable-next-line:space-before-function-paren
describe('Typeahead mappings ', function() {
  this.timeout(5000);
  this.beforeAll(async () => {
    const { text } = queryStringParameters;
    apiResult = await Typeahead.resolve(text);
  });

  it('should have an title and text properties', async () => {
    const [data] = apiResult;
    assert.ok(typeof data.title === 'string');
    assert.ok(typeof data.text === 'string');
  });

  it('should contain the R2-D2 name when passed r2', async () => {
    const [data] = apiResult;
    assert.ok(data.text.includes('R2-D2'));
  });
});
