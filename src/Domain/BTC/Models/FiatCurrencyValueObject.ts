import { InvalidFiatCurrencyCodeError } from "../Error"

export class FiatCurrencyValueObject {
  static create({ fiatCurrencyCode }) {
    return new FiatCurrencyValueObject({ fiatCurrencyCode })
  }

  static CURRENCY_CODES = ["EUR", "USD"]

  constructor({ fiatCurrencyCode }) {
    this._fiatCurrencyCode = fiatCurrencyCode
  }

  value() {
    return this._fiatCurrencyCode
  }
}
