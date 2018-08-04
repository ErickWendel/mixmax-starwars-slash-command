import { StarWarsService } from '../../_shared/service/StarWarsService';
import { People } from '../../_shared/StarWarsResponse';

export class Resolver {
  static async resolve(term) {
    const { results } = await StarWarsService.getPeople(term);
    const defaultAvatar =
      // tslint:disable-next-line:max-line-length
      'https://i2.wp.com/staging.nathaliesstudio.com/app/themes/nathaliesstudio-sage/dist/images/default-avatar-lrg.png';

    const html = results
      .map((item: People) => {
        return [
          `<br/><img src="${defaultAvatar}" />`,
          `<br/><strong>Name</strong>: ${item.name}`,
          `<br/><strong>Birthday<strong>: ${item.birth_year}`,
        ].join();
      })
      .reduce((prev, next) => prev.concat(next), '');

    return { body: html };
  }
}
