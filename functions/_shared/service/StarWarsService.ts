import { constants } from '../../_shared/util/Constants';
import { Response } from '../../_shared/DTO/StarWarsResponse';
import { Request } from '../../_shared/util/Request';
const request = new Request<Response>();

export class StarWarsService {
  static async getPeople(term): Promise<Response> {
    const { data } = await request.get(
      `${constants.BASE_URL}?search=${term}&format=json`,
    );
    return data;
  }
}
