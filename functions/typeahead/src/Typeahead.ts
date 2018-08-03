import * as ax from 'axios';
const { get } = ax.default;
import { Response } from '../../_shared/StarWarsResponse';

export class Typeahead {
  static async resolve(term) {
    if (!term) {
      return Promise.resolve([
        {
          title: '<i>(enter a search term)</i>',
          text: '',
        },
      ]);
    }

    const { data } = await get<Response>(
      `https://swapi.co/api/people/?search=${term}&format=json`,
    );

    return data.results.map(item => ({
      title: item.name,
      text: `Name: ${item.name} - Birthday: ${item.birth_year}`,
    }));
  }
}
