import { util } from '../../_shared/Util';

import { Request } from '../../_shared/Request';
const request = new Request<Response>();
import { Response } from '../../_shared/StarWarsResponse';

export class StarWarsService {
  static async getPeople(term): Promise<Response> {
    const { data } = await request.get(
      `https://swapi.co/api/people/?search=${term}&format=json`,
    );
    return data;
  }
}
