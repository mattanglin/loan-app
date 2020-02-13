import React from 'react';
import Page from '../../components/Page/Page';
import QualificationForm from '../../components/QualificationForm/QualificationForm';

const HomePage = () => {
  return (
    <Page className="home">
      <h1>Landing</h1>
      <p>Complete th following form to pre-qualify for an auto-loan!</p>
      <QualificationForm />
    </Page>
  )
};

export default HomePage;
