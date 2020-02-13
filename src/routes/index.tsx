import { Bag, RoutesMap, StateGetter } from 'redux-first-router'
import { createStandardAction } from 'typesafe-actions'
import { Dispatch } from 'redux';

// General Routes
export const HOME_PAGE = 'HOME_PAGE'

const routes: RoutesMap = {
  // General
  [HOME_PAGE]: {
    path: '/',
  },
}


// Route Actions
export const homePage = createStandardAction(HOME_PAGE)()

export const actions = {
  homePage,
}

export const onBeforeChange = (dispatch: Dispatch, getState: StateGetter, bag: Bag): void => {
  // Redirect based on current state
}

export default routes
