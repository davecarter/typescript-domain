export class BitcoinPriceIndexValueObject {
  static create({ bpi }) {
    return new BitcoinPriceIndexValueObject({ bpi })
  }

  constructor({ bpi }) {
    this._bpi = bpi
  }

  value() {
    return this._bpi
  }

  toJSON() {
    return {
      bpi: this.value()
    }
  }
}
