import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from '../src/Components/App/App';

const Render = () => {
  ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,

    document.getElementById('root'),
  );
};


export default Render;
