import { GetBTCPriceUseCase } from "./BTC/UseCase"
import { UseCaseConstructor, Config } from "./types"

const useCases: {
  [key: string]: UseCaseConstructor<any>
} = { getBTCPriceUseCase: GetBTCPriceUseCase }

export class DomainApp {
  readonly #config: Config;

  static create({ config }: { config: Config }) {
    return new DomainApp(config)
  }

  constructor(config: Config) {
    this.#config = config;
  }

  get getBTCPriceUseCase() {
    return this._getter("getBTCPriceUseCase")
  }

  _getter(name: string) {
    const useCaseConstructor = useCases[name]
    return {
      async execute(...args: any[]) {
        const useCaseInstance = useCaseConstructor.create(config)
        const response = await useCaseInstance.execute(...args)
        return response
      }
    }
  }
}