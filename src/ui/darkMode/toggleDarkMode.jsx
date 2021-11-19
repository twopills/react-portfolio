import { Button } from 'react95';
import React from 'react';
import { Select95 } from '../95/95_select.jsx';
//const eraseCookieAndSet = (cookie, date) = () => {
//     document.cookie = cookie.replace(`expires=${date}`, 'expires=0');
//     setCookie();
// }
function getCookie() {
  if (document.cookie && document.cookie.includes('theme')) {
    const value = document.cookie.split(';')[0].replace('theme=', '');
    return value;
  } else return false;
}

function setCookie(root) {
  const dateExpired = new Date(new Date().getTime() + 2592000000).toUTCString();
  // if(document.cookie && document.cookie.length){
  //     eraseCookieAndSet(document.cookie, dateExpired);
  // }
  document.cookie = `theme=${root.classList.value}; expires=${dateExpired};path=/`;
}
export class ToggleDark extends React.Component {
  toggle() {
    const root = document.getElementById('root');
    console.log('getCookie: ', getCookie);
    if (getCookie()) {
      switch (getCookie()) {
        case 'dark':
          root.classList.remove('dark');
          root.classList.add('light');
          setCookie(root);
          break;
        case 'light':
          root.classList.remove('light');
          root.classList.add('dark');
          setCookie(root);
          break;
        default:
          root.classList.add('light');
          setCookie(root);
          break;
      }
    } else {
      setCookie(root);
    }
  }

  constructor(props) {
    super(props);
    this.toggle();
  }

  render() {
    return (
      <>
        <Select95 />
        <Button square onClick={this.toggle}>
          <span role="img" aria-label="darkMode">
            🌙
          </span>
        </Button>
      </>
    );
  }
}
