import { StarWarsService } from '../../_shared/service/StarWarsService';
import { People } from '../../_shared/DTO/StarWarsResponse';
import { ResolverResponse } from '../../_shared/DTO/MixMaxResponse';

export class Resolver {
  static toHtmlTemplate(item: People) {
    const defaultAvatar =
      // tslint:disable-next-line:max-line-length
      'https://i2.wp.com/staging.nathaliesstudio.com/app/themes/nathaliesstudio-sage/dist/images/default-avatar-lrg.png';

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
