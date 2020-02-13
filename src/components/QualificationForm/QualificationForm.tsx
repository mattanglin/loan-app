import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import { FormValues } from './types';
import validationSchema from './validationSchema';
import { thunks } from '../../state/qualification';

const QualificationForm = () => {
  const dispatch = useDispatch();
  const submitQualification = useCallback(async (values: FormValues) => {
    await dispatch(thunks.verifyLoanThunk(values));
  }, [dispatch]);

  return (
    <Formik
      onSubmit={submitQualification}
      initialValues={{
        autoPurchasePrice: '',
        autoMake: '',
        autoModel: '',
        yearlyIncome: '',
        creditScore: '',
      }}
      validationSchema={validationSchema}
    >
      {formProps => (
        <Form>
          {console.log(formProps)}
          <Input name="autoPurchasePrice" label="Auto Purchase Price" type="number" />
          <Input name="autoMake" label="Auto Make" />
          <Input name="autoModel" label="Auto Model" />
          <Input name="yearlyIncome" label="Estimated Yearly Income" type="number" />
          <Input name="creditScore" label="Estimated Credit Score" type="number" />
          <SubmitButton disabled={formProps.isSubmitting}>
            {formProps.isSubmitting ? '...' : 'Submit'}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default QualificationForm;
