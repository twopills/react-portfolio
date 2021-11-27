import { Button } from 'react95';
import React from 'react';
import { ToggleService } from '../../service/ToggleService.service';
import { getCookies } from 'utils/CookieManager';
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
        ToggleService?.updateState({ icon: 'dark', toggle: true });
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
