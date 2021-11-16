// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TextField95 } from './ui/darkMode/95/95_search.jsx';
function Profile(props) {
  return (
    <>
      <div className="rounded-full h-24 w-24 ml-3">
        <img className="object-contain rounded-full h-24 w-24" alt="profile pic" src="https://avatars.githubusercontent.com/u/58731523?v=4" />
      </div>
      <div className="mt-5 dark:text-white font-bebas tracking-wider px-3 text-gray-900">WRITTEN BY</div>
      <div className="my-1 dark:text-red-100 font-bebas tracking-wider px-3 text-red-400">ELIA</div>
      <div className="my-1 dark:text-white w-2/3 font-bebas tracking-wider px-3 text-gray-900">Hello! I made this site because a web developer must have one!</div>
    </>
  );
}

function Header(props) {
  return (
    <div className="w-2/4 grid grid-cols-2 h-auto p-4 m-5 rounded-md">
      <TextField95 />
    </div>
  );
}

function Box(props) {
  return (
    <div className="box h-72 m-4 text-center p-5 bg-red-200 rounded-md">
      <h4 className="">{props.value}</h4>
    </div>
  );
}

function RightBar(props) {
  return (
    <div className="fixed mt-40 mx-auto">
      <Profile />
    </div>
  );
}
class Body extends React.Component {
  createBox(numberOfElements) {
    return Array(numberOfElements).fill(<Box value={''} />);
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4 h-scren">
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">{this.createBox(50)}</div>
        <div className="col-span-1 p-5 w-auto ">
          <RightBar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-light dark:bg-gray-800">
      <Header />
      <Body />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
