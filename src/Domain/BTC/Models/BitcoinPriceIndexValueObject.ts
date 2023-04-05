export class BitcoinPriceIndexValueObject {
  private _bpi: string

  static create({ bpi }: { bpi: string }) {
    return new BitcoinPriceIndexValueObject({ bpi })
  }

  constructor({ bpi }: { bpi: string }) {
    this._bpi = bpi
  }

  value() {
    return this._bpi
  }

  serialize() {
    return {
      bpi: this.value()
    }
  }
}
