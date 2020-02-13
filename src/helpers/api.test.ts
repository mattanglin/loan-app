import { isQualified } from './api';

describe('helpers/api', () => {
  describe('isQualified', () => {
    it('should return true iff credit score > 600 and purchase price <= 1/5 income', () => {
      const values = {
        autoMake: 'test',
        autoModel: 'test',

        creditScore: 0,
        yearlyIncome: 0,
        autoPurchasePrice: 0,
      }

      expect(isQualified({
        ...values,
        creditScore: 600,
        autoPurchasePrice: 1000,
        yearlyIncome: (1000 * 5)
      })).toBe(true);
      expect(isQualified({
        ...values,
        creditScore: 599,
        autoPurchasePrice: 1000,
        yearlyIncome: 1000 * 5
      })).toBe(false);
      expect(isQualified({
        ...values,
        creditScore: 600,
        autoPurchasePrice: 1000,
        yearlyIncome: (1000 * 5) - 1
      })).toBe(false);
    });
  })
})