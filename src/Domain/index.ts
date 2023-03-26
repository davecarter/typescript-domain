import { GetBTCPriceUseCase } from "./BTC/UseCase";

interface UseCaseConstructor<T> {
  new (...args: any[]): T;
}

const useCases: {
  [key: string]: UseCaseConstructor<any>;
} = {
  getBTCPriceUseCase: GetBTCPriceUseCase,
};


export class DomainApp {
  static create() {
    return new DomainApp();
  }

  get getBTCPriceUseCase() {
    return this._getter("getBTCPriceUseCase");
  }

  _getter(name: string) {
    const useCaseConstructor = useCases[name];
    return {
      async execute(...args: any[]) {
        const useCaseInstance = new useCaseConstructor(...args);
        const response = useCaseInstance.execute();
        return response;
      }
    };
  }
}
