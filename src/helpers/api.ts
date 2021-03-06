import fetchMock from 'fetch-mock';
import { FormValues } from '../components/QualificationForm/types';

// This would likely come from a config
const baseUrl = 'http://api.cuna.com/v1';

export const isQualified = (values: FormValues) => values.autoPurchasePrice <= (values.yearlyIncome as number / 5) && values.creditScore >= 600;

// Mock The fetched Call
fetchMock.mock(`${baseUrl}/verify-loan`, (url, options) => {
  const body = JSON.parse(options.body as string) as FormValues;

  // Verify loan
  // Invalidate large purchase prices
  if (body.autoPurchasePrice > 1000000) {
    return { status: 400, body: JSON.stringify({ message: 'Bad Request'}) };
  } else if (!isQualified(body)) {

    // invalidate if purchase price > 1/5 income OR credit < 600
    return {
      status: 200,
      body: JSON.stringify({
        qualified: false,
        message: 'Unfortunately you are not currently qualified for a new auto loan'
      }),
    };
  }

  return { status: 200, body: JSON.stringify({ qualified: true }) };
});

export const verifyLoanQualification = async (values: FormValues): Promise<{ message: string; qualified?: boolean }> => {
  const response = await (await fetch(`${baseUrl}/verify-loan`, { method: 'PUT', body: JSON.stringify(values) }));

  if (response.status > 299) {
    throw response.json();
  }

  return response.json();
};