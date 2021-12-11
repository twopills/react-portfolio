import { Window, WindowContent, WindowHeader, Button, Toolbar, Panel } from 'react95';
import { ThemeProvider } from 'styled-components';

import water from 'react95/dist/themes/water';
import matrix from 'react95/dist/themes/matrix';
import React from 'react';
import { Observable } from 'rxjs';

export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
};

export class Card95 extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="p-5">
        <ThemeProvider theme={water}>
          <Window resizable className="window">
            <WindowHeader className="window-header">
              <span>{value.name}</span>
            </WindowHeader>
            <Toolbar>
              {value.buttons.map((name: string, index: number) => (
                <Button variant="menu" size="sm" key={index}>
                  {name}
                </Button>
              ))}
            </Toolbar>
            <WindowContent>
              <p>
                {value.description}When you set "resizable" prop, set "resizable" prop, set "resizable" prop , set "resizable" prop, set "resizable" prop, set "resizable" prop,
                there will be drag handle in the bottom right corner
              </p>
            </WindowContent>
            <Panel variant="well" className="footer">
              <p className="px-3">{value.license}</p>
            </Panel>
          </Window>
        </ThemeProvider>
      </div>
    );
  }
}


