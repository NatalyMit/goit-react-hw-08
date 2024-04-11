import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.js';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
