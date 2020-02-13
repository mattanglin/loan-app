import * as Yup from 'yup';
import { FormValues } from './types';

const schema = Yup.object().shape<FormValues>({
  autoPurchasePrice: Yup.number().required('Required').min(0),
  autoMake: Yup.string().required('Required'),
  autoModel: Yup.string().required('Required'),
  yearlyIncome: Yup.number().required('Required').min(0),
  creditScore: Yup.number().required('Required').min(300).max(850)
})

export default schema;
