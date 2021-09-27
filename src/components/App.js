import React from 'react';
import { css, cx } from '@emotion/css'
import { hot } from 'react-hot-loader';

const App = () => {
  return (
    <div className={css`
      padding: 32px;
      background-color: #f0f0f0;
    `}>
      <h1>Hello, Webpack!!! with React</h1>
    </div>
  );
};

export default hot(module)(App);