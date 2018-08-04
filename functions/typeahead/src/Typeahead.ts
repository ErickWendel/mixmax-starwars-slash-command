import { StarWarsService } from '../../_shared/service/StarWarsService';

export class Typeahead {
  static async resolve(term) {
    const { results } = await StarWarsService.getPeople(term);

    return results.map(item => ({
      title: `${item.name}`,
      text: `${item.name}`,
    }));
  }
}
