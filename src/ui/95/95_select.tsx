import React from 'react';
import { Select } from 'react95';
import water from 'react95/dist/themes/water';
import { ThemeProvider } from 'styled-components';
const options = [
  { value: 'light', label: '⚡ Light Mode' },
  { value: 'dark', label: '🌿 Dark Mode' },
];

const onChange = (evt, nextSelection) => {
  console.log(nextSelection);
};

export default {
  title: 'Select',
  component: Select,
};

export const Select95 = () => (
  <div id="default-selects">
    <ThemeProvider theme={water}>
      <Select defaultValue={'light'} options={options} menuMaxHeight={160} width={160} onChange={onChange} />
    </ThemeProvider>
  </div>
);

Select95.story = {
  name: 'default',
};
