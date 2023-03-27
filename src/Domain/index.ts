import { GetBTCPriceUseCase } from "./BTC/UseCase"
import { UseCaseConstructor } from "./types"

const useCases: {
  [key: string]: UseCaseConstructor<any>
} = { getBTCPriceUseCase: GetBTCPriceUseCase }

export class DomainApp {
  static create() {
    return new DomainApp()
  }

  get getBTCPriceUseCase() {
    return this._getter("getBTCPriceUseCase")
  }

  _getter(name: string) {
    const useCaseConstructor = useCases[name]
    return {
      async execute(...args: any[]) {
        const useCaseInstance = useCaseConstructor.create()
        const response = await useCaseInstance.execute(...args)
        return response
      }
    }
  }
}
