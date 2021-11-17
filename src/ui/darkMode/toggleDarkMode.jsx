import { Button } from 'react95';
import React from 'react';

//const eraseCookieAndSet = (cookie, date) = () => {
//     document.cookie = cookie.replace(`expires=${date}`, 'expires=0');
//     setCookie();
// }

export class ToggleDark extends React.Component {
  setCookie(root) {
    const dateExpired = new Date(new Date().getTime() + 2592000000).toUTCString();
    // if(document.cookie && document.cookie.length){
    //     eraseCookieAndSet(document.cookie, dateExpired);
    // }
    document.cookie = `theme=${root.classList.value}; expires=${dateExpired};path=/`;
  }

  getCookie = () => {
    if (document.cookie) {
      return document.cookie.includes('theme') ? document.cookie.split(';')[0].replace('theme=', '') : null;
    } else return null;
  };

  toggle() {
    const root = document.getElementById('root');
    if (this.getCookie()) {
      switch (this.getCookie()) {
        case undefined:
        case null:

        case 'dark':
          root.classList.remove('dark');
          root.classList.add('light');
          this.setCookie(root);
          break;
        case 'light':
          root.classList.remove('light');
          root.classList.add('dark');
          this.setCookie(root);
          break;
        default:
          root.classList.add('light');
          this.setCookie(root);
          break;
      }
    } else {
      this.setCookie(root);
    }
  }

  constructor(props) {
    super(props);
    this.toggle();
  }

  render() {
    return (
      <Button square onClick={this.toggle}>
        <span role="img" aria-label="darkMode">
          🌙
        </span>
      </Button>
    );
  }
}
