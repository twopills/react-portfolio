import React, { useState } from 'react';

import styled from 'styled-components';

import { TextField, Button, Cutout } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import blackAndWhite from "react95/dist/themes/blackAndWhite";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";


const onChange = (e) => console.log(e.target.value);

/////////



const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
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




/////////



export default {
  title: 'TextField',
  component: TextField
};

export const TextField95 = () => {
  const [state, setState] = useState({
    value: '',
  });

  const handleChange = (e) => setState({ value: e.target.value });
  const reset = () => setState({ value: '' });


  return (
	<>
		<GlobalStyles/>
		<ThemeProvider theme={blackAndWhite}>
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