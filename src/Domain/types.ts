export type FiatCurrencyCode = "EUR" | "USD"

export interface UseCaseConstructor<T> {
  new (...args: any[]): T
  create(): T
}
