import React from 'react';
import Page from '../../components/Page/Page';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { disqualificationPage } from '../../routes';

const DisqualificationPage = () => {
  const disqualificationMessage = useSelector<RootState>(state => state.location.payload.disqualificationMessage) as string;

  return (
    <Page className="disqualied">
      <h1>Disqualified</h1>
      <p>{disqualificationMessage}</p>
      <p>Here is some lorem ipsum information to get in contact with a loan officer if you have any questions.</p>
    </Page>
  );
}

export default DisqualificationPage;
