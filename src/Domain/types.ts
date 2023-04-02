export type FiatCurrencyCode = "EUR" | "USD"
export interface FiatCurrencyInput {
  fiatCurrencyCode: FiatCurrencyCode;
}
export type ValidCodes = FiatCurrencyCode[];



export interface UseCaseConstructor<T> {
  new (...args: any[]): T
  create(): T
}


export type ErrorMessage<T> = {
  message: T;
};
