import { util } from '../../_shared/Util/Util';

import { Request } from '../../_shared/util/Request';
const request = new Request<Response>();
import { Response } from '../../_shared/DTO/StarWarsResponse';

export class StarWarsService {
  static async getPeople(term): Promise<Response> {
    const { data } = await request.get(
      `https://swapi.co/api/people/?search=${term}&format=json`,
    );
    return data;
  }
}
