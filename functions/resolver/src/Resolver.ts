import { StarWarsService } from '../../_shared/service/StarWarsService';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { ResolverResponse } from '../../_shared/DTO/MixMaxResponse';
import { constants } from '../../_shared/util/Constants';

export class Resolver {
  static toHtmlTemplate(item: People) {
    const defaultAvatar =
      'https://www.geek.com/wp-content/uploads/2018/01/star-wars-625x352.jpg';

    return [
      `<br/><img src="${defaultAvatar}" width="300" />`,
      `<br/><strong>Name</strong>: ${item.name}`,
      `<br/><strong>Gender</strong>: ${item.gender}`,
    ].join('');
  }
  static async resolve(term): Promise<ResolverResponse> {
    const { results } = await StarWarsService.getPeople(term);

    if (!results.length) {
      return {
        body: constants.DEFAULT_RESPONSE_NOT_FOUND_ITEM.map(
          item => item.title,
        ).join(''),
      };
    }
    const html = results
      .map(this.toHtmlTemplate)
      .reduce((prev, next) => prev.concat(next), '');
    return { body: html };
  }
}
