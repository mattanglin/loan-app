import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../Input/Input';
import { FormValues } from './types';
import validationSchema from './validationSchema';


const submitQualification = async (values: FormValues) => {
  console.log('TODO: Submit', values);
};

const QualificationForm = () => {
  return (
    <Formik
      onSubmit={submitQualification}
      initialValues={{
        autoPurchasePrice: 0,
        autoMake: '',
        autoModel: '',
        yearlyIncome: 0,
        creditScore: 0,
      }}
      validationSchema={validationSchema}
    >
      {formProps => (
        <Form>
          <Input name="autoPurchasePrice" label="Auto Purchase Price" type="number" />
          <Input name="autoMake" label="Auto Make" />
          <Input name="autoModel" label="Auto Model" />
          <Input name="yearlyIncome" label="Estimated Yearly Income" type="number" />
          <Input name="creditScore" label="Estimated Credit Score" type="number" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default QualificationForm;
