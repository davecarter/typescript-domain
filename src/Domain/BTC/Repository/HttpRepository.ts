import axios from "axios"
import { config } from "../../config"
import { FromBpiApiRespToBpiVOMapper } from "../Mapper/FromBpiApiRespToBpiVOMapper"

export class HttpRepository {
  static create() {
    return new HttpRepository()
  }

  async getBTCPriceIndex({ fiatCurrencyCodeVO }) {
    const { COINDESK_API_URL } = config
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
