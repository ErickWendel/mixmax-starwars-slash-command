import { StarWarsService } from '../../_shared/service/StarWarsService';
import { TypeaheadResponse } from '../../_shared/DTO/MixMaxResponse';

export class Typeahead {
  static async resolve(term): Promise<TypeaheadResponse[]> {
    const { results } = await StarWarsService.getPeople(term);

    return results.map(item => ({
      title: `${item.name}`,
      text: `${item.name}`,
    }));
  }
}
