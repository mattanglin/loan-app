import * as Yup from 'yup';
import { FormValues } from './types';

const schema = Yup.object().shape<FormValues>({
  username: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string()
    .min(8)
    .matches(/[0-9!@#\$%\^\&*\)\(+=._-]/, 'Password must contain number or special character')
    .required('Required'),
  confirmPassword: Yup.string().required('Required'),
})

export default schema;
