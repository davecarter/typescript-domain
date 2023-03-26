import { config } from "../../config"
import { BitcoinPriceIndexValueObject } from "../Models"

export class FromBpiApiRespToBpiVOMapper {
  static create() {
    return new FromBpiApiRespToBpiVOMapper()
  }

  setParams({ fiatCurrencyCodeValue }) {
    this._fiatCurrencyCodeValue = fiatCurrencyCodeValue
    return this
  }

  _formatCurrency = (rawFloat, fiatCurrencyCodeValue) => {
    const { LOCALE } = config
    return new Intl.NumberFormat(LOCALE[this._fiatCurrencyCodeValue], {
      style: "currency",
      currency: fiatCurrencyCodeValue,
      minimumFractionDigits: 0
    }).format(parseInt(rawFloat, 10))
  }

  map(rawApiResponse) {
    const rawFloat = rawApiResponse.bpi[this._fiatCurrencyCodeValue].rate_float

    return BitcoinPriceIndexValueObject.create({
      bpi: this._formatCurrency(rawFloat, this._fiatCurrencyCodeValue)
    })
  }
}
