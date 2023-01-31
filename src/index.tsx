import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   // stcric рендерит 2 раза при использований useUffect
//   // <React.StrictMode>

//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   // </React.StrictMode>
// );
