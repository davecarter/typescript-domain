import { HttpRepository } from "../Repository"
import { FiatCurrencyValueObject } from "../Models"
import { FiatCurrencyCode } from "../../types"

export class GetBTCPriceUseCase {
  #repository

  constructor({ repository }: any) {
    if (!repository) throw new Error("Repository not provided")
    this.#repository = repository
  }

  static create() {
    const repository = HttpRepository.create()
    return new GetBTCPriceUseCase({ repository })
  }

  async execute({ fiatCurrencyCode }: { fiatCurrencyCode: FiatCurrencyCode }): Promise<ResponseType> {
    const fiatCurrencyCodeVO = FiatCurrencyValueObject.create({ fiatCurrencyCode })

    const responseVO = await this.#repository.getBTCPriceIndex({
      fiatCurrencyCodeVO
    })

    return responseVO.toJSON()
  }
}
