import { createStandardAction, getType, ActionType } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'state';
import { AnyAction, Dispatch } from 'redux';
import { redirect } from 'redux-first-router';
import { disqualificationPage, newAccountPage } from '../routes';
import { FormValues } from '../components/QualificationForm/types';
import * as api from '../helpers/api';

// Action Types
export const QUALIFY_REQUEST = '@qualification/QUALIFY_REQUEST';
export const QUALIFY_SUCCESS = '@qualification/QUALIFY_SUCCESS';
export const QUALIFY_FAILURE = '@qualification/QUALIFY_FAILURE';

// Actions
export const actions = {
  qualifyRequest: createStandardAction(QUALIFY_REQUEST)(),
  qualifySuccess: createStandardAction(QUALIFY_SUCCESS)(),
  qualifyFailure: createStandardAction(QUALIFY_FAILURE)<string>(),
};

type Action = ActionType<typeof actions>;

// Thunks
export const verifyLoanThunk = (values: FormValues): ThunkAction<Promise<{}>, RootState, null, AnyAction> => async (dispatch: Dispatch) => {
  dispatch(actions.qualifyRequest());

  try {
    // TODO await api call
    const result = await api.verifyLoanQualification(values);

    if (result.qualified) {
      dispatch(actions.qualifySuccess());
      dispatch(redirect(newAccountPage('Ideally a sucess confirmation id')));
    } else {
      dispatch(redirect(disqualificationPage(result.message)));
    }
  } catch (err) {
    const errorMessage = err.message || 'Could not complete loan qualification, please try again.';
    dispatch(actions.qualifyFailure(errorMessage));
  }

  // TODO return fetched data
  return {};
}

export const thunks = {
  verifyLoanThunk,
};

export interface QualificationState {
  fetching: boolean;
  error?: string;
};

const initialState: QualificationState = {
  fetching: false,
  error: undefined,
};

const reducer = (state: QualificationState = initialState, action: Action) => {
  switch (action.type) {
    case getType(actions.qualifyRequest):
      return {
        ...state,
        fetching: true,
      };
    case getType(actions.qualifySuccess):
      return {
        ...state,
        fetching: false,
        error: undefined,
      };
    case getType(actions.qualifyFailure):
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
