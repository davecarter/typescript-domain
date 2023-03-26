import { InvalidFiatCurrencyCodeError } from "../Error"

export class FiatCurrencyValueObject {
  static create({ fiatCurrencyCode }) {
    if (FiatCurrencyValueObject.CURRENCY_CODES.includes(fiatCurrencyCode)) {
      return new FiatCurrencyValueObject({ fiatCurrencyCode })
    } else {
      InvalidFiatCurrencyCodeError.create()
    }
  }

  static CURRENCY_CODES = ["EUR", "USD"]

  constructor({ fiatCurrencyCode }) {
    this._fiatCurrencyCode = fiatCurrencyCode
  }

  value() {
    return this._fiatCurrencyCode
  }
}
