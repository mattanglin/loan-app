import { FormikErrors } from 'formik';
import { FormValues } from './types';

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  // Handle Password equaling
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
}

export default validate;
