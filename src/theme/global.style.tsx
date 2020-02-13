import React from 'react';
import { Global, css } from '@emotion/core';

const styles = {
  body: {
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }
};

const GlobalStyle = () => <Global styles={css(styles)} />;

export default GlobalStyle;
