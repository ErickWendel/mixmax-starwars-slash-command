export class Resolver {
  static resolve(term) {
    return {
      body: `<b>Hi</b> ${!!term ? JSON.stringify(term) : ''}`,
    };
  }
}
