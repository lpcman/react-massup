import {ConnectedRouter} from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {addLocaleData} from 'react-intl';
import {Provider} from 'react-redux';
import IntlProvider from './locales/IntlProvider';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/'
import {history, store} from './store/'

import './index.css';

import * as ar from 'react-intl/locale-data/ar';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';

addLocaleData([...en, ...ar, ...fr]);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <div>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </div>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
