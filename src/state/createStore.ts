import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';
import thunk from 'redux-thunk'
import routes, { onBeforeChange } from '../routes';

// Application Reducers
import qualification from './qualification';

// Setup RFR
const {
  enhancer: routeEnhancer,
  middleware: routerMiddleware,
  reducer: location,
} = connectRoutes(routes, {
  onBeforeChange,
  restoreScroll: restoreScroll(),
})
export const rootReducer = combineReducers({
  location,
  qualification,
})

// Configured createStore
const createStore = () => {
  const store = createReduxStore(
    rootReducer,
    composeWithDevTools(routeEnhancer, applyMiddleware(routerMiddleware, thunk))
  );

  return store;
};

export default createStore
