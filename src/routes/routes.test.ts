import { Dispatch } from 'redux';
import { redirect, Bag } from 'redux-first-router';
import { actions, onBeforeChange, DISQUALIFICATION_PAGE, NEW_ACCOUNT_PAGE } from './index';

jest.mock('redux-first-router');
const mockedRedirect = redirect as jest.Mocked<typeof redirect>;

describe('routes', () => {
  describe('onBeforeChange', () => {
    let dispatch: Dispatch;
    let getState: any;
    let bag: Bag;

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
      bag = {
        action: {
          type: 'ACTION_TYPE'
        },
        extra: {},
      }
    });

    it('should redirect from the disqualified page if no disqualification message is provided', () => {
      bag.action.type = DISQUALIFICATION_PAGE;
      onBeforeChange(dispatch, getState, bag);

      expect(mockedRedirect).toHaveBeenCalledWith(actions.homePage());
    });

    it('should NOT redirect from the disqualified page if a disqualification message is provided', () => {
      bag.action.type = DISQUALIFICATION_PAGE;
      bag.action.payload = { disqualificationMessage: 'some message' }
      onBeforeChange(dispatch, getState, bag);

      expect(mockedRedirect).not.toHaveBeenCalledWith();
    });

    it('should redirect from the new account page if no accountSuccess message is provided', () => {
      bag.action.type = NEW_ACCOUNT_PAGE;
      onBeforeChange(dispatch, getState, bag);

      expect(mockedRedirect).toHaveBeenCalledWith(actions.homePage());
    });

    it('should NOT redirect from the new account page if an accountSuccess message is provided', () => {
      bag.action.type = NEW_ACCOUNT_PAGE;
      bag.action.payload = { accountSuccess: 'success' };
      onBeforeChange(dispatch, getState, bag);

      expect(mockedRedirect).toHaveBeenCalledWith(actions.homePage());
    });
  });
});