import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'react-css-themr';
import { document } from 'global/window';
import axios from 'axios';
import { API_URL } from './constants';
import Layout from './components/Layout';
import reducers from './modules';
import theme from './themes';

const api = axios.create({
  baseURL: API_URL
});

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(api)),
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();
