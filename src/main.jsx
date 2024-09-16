import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/index.js';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  </StrictMode>,
)
