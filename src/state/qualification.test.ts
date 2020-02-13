import reducer, { actions, thunks, QUALIFY_REQUEST } from './qualification';
import { redirect } from 'redux-first-router';
import { Dispatch } from 'redux';
import { FormValues } from '../components/QualificationForm/types';
import * as api from '../helpers/api';
import { actions as routeActions } from '../routes';

jest.mock('../helpers/api');
const mockedApi = api as jest.Mocked<typeof api>;
jest.mock('redux-first-router');
const mockedRedirect = redirect as jest.Mocked<typeof redirect>;

describe('state/qualification', () => {
  describe('thunks', () => {
    describe('verifyLoanThunk', () => {
      let dispatch: Dispatch;
      let getState: any;
      let values: FormValues;

      beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        values = {
          autoMake: 'make',
          autoModel: 'model',
          autoPurchasePrice: 600,
          yearlyIncome: 10000,
          creditScore: 600,
        }
      });

      it('should redirect to new accounts on qualify success', async () => {
        mockedApi.verifyLoanQualification.mockImplementation(async (values: FormValues) => ({ message: 'success', qualified: true }));

        await thunks.verifyLoanThunk(values)(dispatch, getState, null);

        expect(mockedRedirect).toHaveBeenCalledWith(routeActions.newAccountPage('Ideally a sucess confirmation id'));
      });

      it('should redirect to disqualified on unqualified', async () => {
        mockedApi.verifyLoanQualification.mockImplementation(async (values: FormValues) => ({ message: 'Did not qualify', qualified: false }));

        await thunks.verifyLoanThunk(values)(dispatch, getState, null);

        expect(mockedRedirect).toHaveBeenCalledWith(routeActions.disqualificationPage('Did not qualify'));
      });

      it('should dispatch a failure on api error', async () => {
        mockedApi.verifyLoanQualification.mockImplementation(async (values: FormValues) => {
          throw new Error();
        });

        await thunks.verifyLoanThunk(values)(dispatch, getState, null);

        expect(dispatch).toHaveBeenCalledWith(actions.qualifyFailure('Could not complete loan qualification, please try again.'))
      })
    })
  });

  describe('reducer', () => {
    it('should set fetching true on QUALIFY_REQUEST action', () => {
      const result = reducer(undefined, { type: QUALIFY_REQUEST });

      expect(result).toHaveProperty('fetching', true);
    });

    // More test for reducer cases here...
  });
})