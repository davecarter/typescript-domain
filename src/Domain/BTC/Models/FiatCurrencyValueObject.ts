import { ErrorMessage, ValidCodes, FiatCurrencyCode, FiatCurrencyInput } from '../../types';
import { InvalidFiatCurrencyCodeError } from "../Error"

export class FiatCurrencyValueObject {
  readonly #fiatCurrencyCode: FiatCurrencyCode;
  readonly #validCodes: ValidCodes;

  static create({ fiatCurrencyCode }: FiatCurrencyInput): FiatCurrencyValueObject {
    return new FiatCurrencyValueObject({ fiatCurrencyCode });
  }

  constructor({ fiatCurrencyCode }: { fiatCurrencyCode: FiatCurrencyCode }) {
    this.#fiatCurrencyCode = fiatCurrencyCode;
    this.#validCodes = [fiatCurrencyCode] as ValidCodes
  }

  validate() {
    if (!this.#validCodes.includes(this.#fiatCurrencyCode)) {
      throw new InvalidFiatCurrencyCodeError<ErrorMessage<string>>({
        message: "Invalid fiat currency code",
      });
    }
  }

  value(): string {
    return this.#fiatCurrencyCode;
  }

  serialize(): { fiatCurrencyCode: string } {
    return {
      fiatCurrencyCode: this.value(),
    };
  }
}
