import React from 'react';
import { Global, css } from '@emotion/core';

const styles = {
  'html, body, #root, .app': {
    height: '100%',
  },
  body: {
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '.app': {
    display: 'flex',
    justifyContent: 'center',
  }
};

const GlobalStyle = () => <Global styles={css(styles)} />;

export default GlobalStyle;
