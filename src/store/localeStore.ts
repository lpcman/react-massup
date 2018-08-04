import translation from "../locales/messages";
import {DEFAULT_LOCALE, flattenMessages} from "../locales/utils";

export interface ILocale {
  locale: string;
  messages: object;
}

export interface ILocaleStore {
  locales: ILocale
}

export const storeLocale: ILocale = {
  locale: DEFAULT_LOCALE,
  messages: flattenMessages(translation[DEFAULT_LOCALE])
};
