import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import { FormValues } from './types';
import validationSchema from './validationSchema';
import validate from './validate';

const register = (values: FormValues) => console.log('TODO: register', values);

const QualificationForm = () => {
  return (
    <Formik
      onSubmit={register}
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      validate={validate}
    >
      {formProps => (
        <Form>
          <Input name="username" label="Username" />
          <Input name="password" label="Password" type="password" />
          <Input name="confirmPassword" label="Confirm Password" type="password" />
          <SubmitButton disabled={formProps.isSubmitting}>
            {formProps.isSubmitting ? '...' : 'Submit'}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default QualificationForm;
