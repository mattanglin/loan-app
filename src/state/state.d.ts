declare module 'state' {
  import { StateType } from 'typesafe-actions'
  import { ThunkDispatch } from 'redux-thunk'
  import { AnyAction } from 'redux'
  import { rootReducer } from './createStore';

  export type RootState = StateType<typeof import('./createStore').rootReducer>
  export type GetState = () => RootState
  export type Dispatch = ThunkDispatch<RootState, null, AnyAction>
}
