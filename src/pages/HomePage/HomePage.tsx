import React from 'react';
import Page from '../../components/Page/Page';
import QualificationForm from '../../components/QualificationForm/QualificationForm';

const HomePage = () => {
  return (
    <Page className="home">
      <h1>Pre-Qualification Tool</h1>
      <p>Complete the following form to pre-qualify for an auto-loan!</p>
      <QualificationForm />
    </Page>
  )
};

export default HomePage;
