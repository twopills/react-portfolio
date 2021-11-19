import React, { useState } from 'react';

import { Window, WindowContent, WindowHeader, Button, Toolbar, Panel } from 'react95';
import { ThemeProvider } from 'styled-components';

import water from 'react95/dist/themes/water';

export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
};

export const Card95 = () => {
  return (
    <div className="p-5">
      <ThemeProvider theme={water}>
        <Window resizable className="window">
          <WindowHeader className="window-header">
            <span>react95.exe</span>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
            <p>When you set &quot;resizable&quot; prop, there will be drag handle in the bottom right corner (but resizing itself must be handled by you tho!)</p>
          </WindowContent>
          <Panel variant="well" className="footer">
            Put some useful informations here
          </Panel>
        </Window>
      </ThemeProvider>
    </div>
  );
};
