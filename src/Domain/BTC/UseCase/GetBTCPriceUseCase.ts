import { HttpRepository } from "../Repository"
import { FiatCurrencyValueObject } from "../Models"
import { FiatCurrencyCode, Config } from "../../types"
import { UseCase } from "./abstract"

export class GetBTCPriceUseCase extends UseCase {
  #repository

  constructor({ repository }: any) {
    super()
    if (!repository) throw new Error("Repository not provided")
    this.#repository = repository
  }

  static create(config: Config) {
    const repository = HttpRepository.create(config)
    return new GetBTCPriceUseCase({ repository })
  }

  async execute({ fiatCurrencyCode }: { fiatCurrencyCode: FiatCurrencyCode }): Promise<ResponseType> {
    const fiatCurrencyCodeVO = FiatCurrencyValueObject.create({ fiatCurrencyCode })

    const responseVO = await this.#repository.getBTCPriceIndex({
      fiatCurrencyCodeVO
    })

    return responseVO.serialize()
  }
}
