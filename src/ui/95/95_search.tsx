import React, { useState } from 'react';

import { TextField, Button } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// pick a theme of your choice
import water from 'react95/dist/themes/water';
// original Windows95 font (optionally)

// @ts-ignore
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff';
// @ts-ignore
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const onChange = (e) => console.log(e.target.value);

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url(${ms_sans_serif}) format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url(${ms_sans_serif_bold}) format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  input{
	border-width:0px;
	border:none;
  }
`;

export default {
  title: 'TextField',
  component: TextField,
};

export const TextField95 = () => {
  const [state, setState] = useState({
    value: '',
  });

  const handleChange = (e) => setState({ value: e.target.value });
  const reset = () => setState({ value: '' });

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={water}>
        <div style={{ width: 400 }}>
          <div style={{ display: 'flex' }}>
            <TextField value={state.value} placeholder="Type here..." onChange={handleChange} fullWidth />
            <Button onClick={reset} style={{ marginLeft: 4 }}>
              Reset
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

/*Default.story = {
  name: 'default',
};*/
