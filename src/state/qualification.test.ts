import reducer, { thunks, QUALIFY_REQUEST } from './qualification';

describe('state/qualification', () => {
  describe('thunks', () => {
    describe('verifyLoanThunk', () => {
      // Test thunk branching
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