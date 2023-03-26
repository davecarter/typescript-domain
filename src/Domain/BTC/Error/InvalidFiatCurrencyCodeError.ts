export class InvalidFiatCurrencyCodeError {
  static create() {
    console.error("Invalid currency code. Only EUR and USD values allowed")
  }
}
