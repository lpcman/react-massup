import * as React from 'react';
import {
  FormattedDate,
  FormattedHTMLMessage,
  FormattedMessage,
  FormattedRelative,
  FormattedTime,
  injectIntl,
} from 'react-intl';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import * as actions from '../../actions/localesAction';
import {LOCALES_LANGS} from '../../locales/utils';

import { DatePicker, Pagination } from 'antd';

import {ILocaleStore} from "../../store/localeStore";

export interface IProps {
  locale: string;
  intl: ReactIntl.InjectedIntl;
  changeLocale: any;
}

const App = ({intl, locale, changeLocale}: IProps) => (
  <div
    className="container"
    style={
      locale === 'ar'
        ? {paddingTop: '50px', direction: 'rtl', textAlign: 'right'}
        : {paddingTop: '50px'}
    }>
    <div className="jumbotron">
      <h1 className="display-4">
        <FormattedMessage id="home.top.title"/>
      </h1>
      <div className="form-group row">
        <label htmlFor="localesList" className="col-sm-12 col-md-2 col-form-label">
          <FormattedMessage id="home.top.locales-list"/>
        </label>
        <select
          id="localesList"
          className="form-control col-sm-12 col-md-2"
          value={locale}
          onChange={ e => changeLocale(e.target.value) }  // tslint:disable-line
        >
          {Object.keys(LOCALES_LANGS).map(lang => <option key={lang} value={lang}>{LOCALES_LANGS[lang]}</option>)}
        </select>
      </div>
      <h4>
        <FormattedHTMLMessage id="home.top.html-content"/>
      </h4>
      <hr className="my-2"/>
      <h5>
        <FormattedMessage id="home.bottom.today"/>&nbsp;
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="numeric"
        />&nbsp;
        <FormattedTime value={new Date()}/>
      </h5>
      <h5>
        <FormattedMessage id="home.bottom.pub-date"/>&nbsp;
        <FormattedRelative value={new Date(1524674153739)}/>
      </h5>
      <h5>
        <FormattedMessage id="home.bottom.load-time"/>&nbsp;
        <FormattedRelative
          value={new Date()}
          updateInterval={1000}
        />
      </h5>
      <h5>
        <FormattedMessage
          id="home.bottom.num"
          values={{num: '12.34'}}
        />
        <FormattedMessage
          id="home.bottom.price"
          values={{
            price: intl.formatNumber(
              24.5,
              {
                currency: locale === 'fr' ? 'EUR' : locale === 'ar' ? 'EGP' : 'USD',
                currencyDisplay: 'symbol',
                style: 'currency'
              }
            )
          }}
        />
      </h5>
      <DatePicker />
      <Pagination showQuickJumper={true} defaultCurrent={2} total={500} />
    </div>
  </div>
);

const mapStateToProps = ({locales: {locale}}: ILocaleStore) => ({locale});

const mapDispatchToProps = (dispatch: Dispatch<actions.IUpdateLocales>) => ({
  changeLocale: (locale: string) => dispatch(actions.updateLocales(locale))
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App) as any);

