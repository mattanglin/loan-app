import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './state/createStore';
import App from './App';

const store = createStore()

const renderApp = (Component: React.ComponentType) =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root') as HTMLElement
  )

renderApp(App)

// 🔥 HMR 🔥
if ((module as any).hot) {
  (module as any).hot.accept('./App.tsx', () => {
    const NextApp = require('./App.tsx').default
    console.log('🔥🔥🔥 HMR Update 🔥🔥🔥')

    renderApp(NextApp)
  })
}
