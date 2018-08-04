import { StarWarsService } from '../../_shared/service/StarWarsService';
import { TypeaheadResponse } from '../../_shared/DTO/MixMaxResponse';
import { variables } from '../../_shared/util/Constants';
export class Typeahead {
  static async resolve(term): Promise<TypeaheadResponse[]> {
    const { results } = await StarWarsService.getPeople(term);
    if (!results.length) {
      return variables.DEFAULT_RESPONSE_NOT_FOUND_ITEM;
    }
    return results.map(item => ({
      title: `${item.name}`,
      text: `${item.name}`,
    }));
  }
}
