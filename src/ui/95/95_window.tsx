import React, { useState } from 'react';

import { Window, WindowContent, WindowHeader, Button, Toolbar, Panel } from 'react95';
import { ThemeProvider } from 'styled-components';

import water from 'react95/dist/themes/water';

export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
};

export const Card95 = (props) => {
  console.log(props.value);
  const { value } = props;
  return (
    <div className="p-5">
      <ThemeProvider theme={water}>
        <Window resizable className="window">
          <WindowHeader className="window-header">
            <span>{value.title}</span>
          </WindowHeader>
          <Toolbar>
            {value.buttons.map((btn) => (
              <Button variant="menu" size="sm">
                {btn.title}
              </Button>
            ))}
          </Toolbar>
          <WindowContent>
            <p>{value.description}</p>
          </WindowContent>
          <Panel variant="well" className="footer">
            {value.footer}
          </Panel>
        </Window>
      </ThemeProvider>
    </div>
  );
};
