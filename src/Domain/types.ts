import { config } from './config';
import { FiatCurrencyValueObject } from './BTC/Models/FiatCurrencyValueObject';
export type FiatCurrencyCode = "EUR" | "USD"
export interface FiatCurrencyInput {
  fiatCurrencyCode: FiatCurrencyCode;
}
export type ValidCodes = FiatCurrencyCode[];

export type Config = {
  COINDESK_API_URL: string;
  LOCALE: {
    EUR: string;
    USD: string;
  };
};

export interface UseCaseConstructor<T> {
  new (...args: any[]): T
  create(config : Config): T
}

export interface FiatCurrencyCodeVO {
  value(): string;
  serialize(): { fiatCurrencyCode: string };
}


export type ErrorMessage<T> = {
  message: T;
};
