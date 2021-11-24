import { Button } from 'react95';
import React from 'react';
enum EMod {
  NOT_SET,
  LIGHT,
  DARK,
}
function setCookie(value: string) {
  const dateExpired = new Date(new Date().getTime() + 2592000000).toUTCString();
  document.cookie = `theme=${value}; expires=${dateExpired};path=/`;
}

function getCookie() {
  if (document.cookie && document.cookie.includes('theme')) {
    const value = document.cookie.split(';')[0].replace('theme=', '');
    return value.includes('light') ? EMod.LIGHT : EMod.DARK;
  } else return EMod.NOT_SET;
}

export class ToggleDark extends React.Component {
  toggle() {
    const root = document.getElementById('root');
    switch (getCookie()) {
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

  constructor(props) {
    super(props);
    this.toggle();
  }

  render() {
    return (
      <>
        {/* <Select95 /> */}
        <Button square onClick={this.toggle}>
          <span role="img" aria-label="darkMode">
            🌙
          </span>
        </Button>
      </>
    );
  }
}
