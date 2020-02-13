import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import { FormValues } from './types';
import validationSchema from './validationSchema';
import { thunks } from '../../state/qualification';
import { RootState } from 'state';
import style from './QualificationForm.style'

const QualificationForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector<RootState>((state) => state.qualification.error) as string | undefined;
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
        <Form css={style}>
          <Input name="autoPurchasePrice" label="Auto Purchase Price" type="number" />
          <Input name="autoMake" label="Auto Make" />
          <Input name="autoModel" label="Auto Model" />
          <Input name="yearlyIncome" label="Estimated Yearly Income" type="number" />
          <Input name="creditScore" label="Estimated Credit Score" type="number" />
          <SubmitButton disabled={formProps.isSubmitting}>
            {formProps.isSubmitting ? '...' : 'Submit'}
          </SubmitButton>
          {errorMessage && <div className="form-error">{errorMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default QualificationForm;
