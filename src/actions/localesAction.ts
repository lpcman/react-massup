import messages from '../locales/messages';
import { flattenMessages } from '../locales/utils';

export const UPDATE_LOCALE = 'UPDATE_LOCALE';
export type UPDATE_LOCALE = typeof UPDATE_LOCALE;

export interface IUpdateLocales {
    type: UPDATE_LOCALE,
    payload: {
      locale: string,
      messages: object
    }
}

export type UpdateLocalesAction = IUpdateLocales;

export const updateLocales = (locale: string): IUpdateLocales => ({
  payload: {
    locale,
    messages: flattenMessages(messages[locale])
  },
  type: UPDATE_LOCALE
});
