import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';

interface ILocales {
  locales: {
    locale: string,
    messages: object
  }
}

// @tslint disable
const mapStateToProps = ({locales: {locale, messages}}: ILocales) => ({
  key: locale,
  locale,
  messages
});

export default connect(mapStateToProps)(IntlProvider);
