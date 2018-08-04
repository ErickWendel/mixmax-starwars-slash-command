import * as ax from 'axios';
// strange behavior with axios
// tslint:disable-next-line:no-duplicate-imports
import { AxiosPromise } from 'axios';
import { variables } from './Constants';

const {
  default: { get },
} = ax;

const errorTimeout = (reject, urlRequest: string) =>
  reject(new Error(`timeout at [${urlRequest}] :(`));

export class Request<T> {
  private raceTimeoutDelay(fnName) {
    return new Promise((resolve, reject) =>
      setTimeout(() => errorTimeout(reject, fnName), variables.DEFAULT_TIMEOUT),
    );
  }

  race(urlRequest: string, promiseFn: Function): AxiosPromise<T> {
    return <AxiosPromise<T>>(
      Promise.race([promiseFn(), this.raceTimeoutDelay(urlRequest)])
    );
  }

  get<T>(url, params?) {
    return this.race(url, () => get<T>(url, { params }));
  }
}
