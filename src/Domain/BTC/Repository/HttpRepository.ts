import axios from "axios"
import { Config, FiatCurrencyCodeVO } from "../../types"
import { FromBpiApiRespToBpiVOMapper } from "../Mapper/FromBpiApiRespToBpiVOMapper"

export class HttpRepository {
  #config

  static create(config: Config) {
    return new HttpRepository(config)
  }

  constructor(config: Config) {
    this.#config = config
  }

  async getBTCPriceIndex({ fiatCurrencyCodeVO }: { fiatCurrencyCodeVO: FiatCurrencyCodeVO }) {
    const { COINDESK_API_URL } = this.#config
    const fiatCurrencyCodeValue = fiatCurrencyCodeVO.value()
    const url = `${COINDESK_API_URL}${fiatCurrencyCodeValue}.json`
    console.log("URL", url)

    try {
      const response = await axios.get(url)
      const mapper = FromBpiApiRespToBpiVOMapper.create()
      const bitcoinPriceIndexVo = mapper.setParams({ fiatCurrencyCodeValue }).map(response.data)

      return bitcoinPriceIndexVo
    } catch (e) {
      if (e) {
        console.error(e)
      }
    }
  }
}
