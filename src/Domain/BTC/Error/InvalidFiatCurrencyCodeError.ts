import { ErrorMessage } from '../../types';

export class InvalidFiatCurrencyCodeError<T> extends Error {
  #error: ErrorMessage<T>;

  constructor(message: T) {
    super();
    this.#error = { message };
  }

  get error() {
    return this.#error;
  }
}
