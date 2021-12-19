import { Button } from 'react95';
import React from 'react';
import { getCookies } from 'utils/CookieManager';

function setCookie(value: string) {
  const dateExpired = new Date(new Date().getTime() + 2592000000).toUTCString();
  document.cookie = `theme=${value}; expires=${dateExpired};path=/`;
}
export class ToggleDark extends React.Component {
  constructor(props) {
    super(props);
    this.toggle();
  }
  toggle() {
    const root = document.getElementById('root');
    switch (getCookies()) {
      case 1:
        root?.classList.remove('light');
        root?.classList.add('dark');
        setCookie('dark');
        break;
      case 2:
        root?.classList.remove('dark');
        root?.classList.add('light');
        setCookie('light');
        break;
      default:
        root?.classList.add('light');
        setCookie('light');
        break;
    }
  }

  render() {
    return (
      <>
        <Button square onClick={this.toggle}>
          <span role="img" aria-label="darkMode">
            🌙
          </span>
        </Button>
      </>
    );
  }
}
