import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from 'state';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { generateId } from 'helpers';
import { Main } from 'components';

const App = () => (
  <CssBaseline>
    <Provider store={store}>
      <Router forceRefresh>
        <Switch>
          <Route exact path={'/'}>
            <Redirect to={`/${generateId()}`} />
          </Route>

          <Route path={'/:pollId'}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </CssBaseline>
);

export default App;
