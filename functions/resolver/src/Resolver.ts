import { StarWarsService } from '../../_shared/service/StarWarsService';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { ResolverResponse } from '../../_shared/DTO/MixMaxResponse';

export class Resolver {
  static toHtmlTemplate(item: People) {
    const defaultAvatar =
      'https://www.geek.com/wp-content/uploads/2018/01/star-wars-625x352.jpg';

    return [
      `<br/><img src="${defaultAvatar}" />`,
      `<br/><strong>Name</strong>: ${item.name}`,
    ].join();
  }
  static async resolve(term): Promise<ResolverResponse> {
    const { results } = await StarWarsService.getPeople(term);

    const html = results
      .map(this.toHtmlTemplate)
      .reduce((prev, next) => prev.concat(next), '');

    return { body: html };
  }
}
