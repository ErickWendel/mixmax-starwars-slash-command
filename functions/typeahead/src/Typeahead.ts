import { Response } from '../../_shared/StarWarsResponse';
import { util } from '../../_shared/Util';
import { Request } from '../../_shared/Request';
const request = new Request<Response>();

export class Typeahead {
  static async resolve(term) {
    const { data } = await request.get(
      `https://swapi.co/api/people/?search=${term}&format=json`,
    );

    return data.results.map(item => ({
      title: item.name,
      text: `Name: ${item.name} - Birthday: ${item.birth_year}`,
    }));
  }
}
