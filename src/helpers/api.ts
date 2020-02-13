import { FormValues } from '../components/QualificationForm/types';

// This would likely come from a config
const baseUrl = 'http://api.cuna.com/v1';

// const fetchMock = ();

export const verifyLoanQualification = async (values: FormValues) => {
  // const result = await (await fetch(`${baseUrl}/verify-loan`, { method: 'PUT', body: JSON.stringify(values) })).json();
  const result = await (await fetch('https://swapi.co/api/people/1')).json();

  console.log('result!', result);
  return result.json();
};