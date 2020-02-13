import { redirect, Bag, RoutesMap, StateGetter } from 'redux-first-router'
import { createAction } from 'typesafe-actions'
import { Dispatch } from 'redux';

// General Routes
export const HOME_PAGE = 'HOME_PAGE';
export const NEW_ACCOUNT_PAGE = 'NEW_ACCOUNT_PAGE';
export const DISQUALIFICATION_PAGE = 'DISQUALIFICATION_PAGE';

const routes: RoutesMap = {
  // General
  [HOME_PAGE]: {
    path: '/',
  },
  [NEW_ACCOUNT_PAGE]: {
    path: '/new-account',
  },
  [DISQUALIFICATION_PAGE]: {
    path: '/disqualified',
  },
};


// Route Actions
export const homePage = createAction(HOME_PAGE);
export const newAccountPage = createAction(NEW_ACCOUNT_PAGE, actionCallback => (accountSuccess: string) => actionCallback({ accountSuccess }));
export const disqulificationPage = createAction(DISQUALIFICATION_PAGE, actionCallback => (disqualificationMessage: string) => actionCallback({ disqualificationMessage }));

export const actions = {
  homePage,
  newAccountPage,
  disqulificationPage,
}

export const onBeforeChange = (dispatch: Dispatch, getState: StateGetter, bag: Bag): void => {
  // Redirect based on current state
  switch (bag.action.type) {
    case NEW_ACCOUNT_PAGE:
      // Redirect home if we don't have accountSuccess
      if (!bag.action.payload?.accountSuccess) {
        dispatch(redirect(homePage()));
      }
      break;
    case DISQUALIFICATION_PAGE:
      // Redirect home if we don't have disqualificationMessage
      if (!bag.action.payload?.disqualificationMessage) {
        dispatch(redirect(homePage()));
      }
      break;
  }
};

export default routes
