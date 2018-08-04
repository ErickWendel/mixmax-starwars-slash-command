import * as ax from 'axios';
// strange behavior with axios
// tslint:disable-next-line:no-duplicate-imports
import { AxiosPromise } from 'axios';

const {
  default: { get },
} = ax;

const defaultTimeout = 100;
const errorTimeout = (reject, urlRequest: string) =>
  reject(new Error(`timeout at [${urlRequest}] :(`));

export class Request<T> {
  private raceTimeoutDelay(fnName) {
    return new Promise((resolve, reject) =>
      setTimeout(() => errorTimeout(reject, fnName), defaultTimeout),
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
