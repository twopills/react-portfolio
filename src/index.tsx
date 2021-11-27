// src/index.tsx
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TextField95 } from './ui/95/95_search';
// @ts-ignore
import { ToggleDark } from './ui/darkMode/toggleDarkMode.tsx';
import { Card95 } from './ui/95/95_window';
import { RepositoryService } from './service/Repository.service';
import { Observable, pipe, Subscription, tap } from 'rxjs';
import { IRepository } from 'config/Structure.interface';
function Header(): JSX.Element {
  return (
    <div className="grid grid-cols-2">
      <div className="w-2/4 h-auto p-4 m-5 rounded-md">
        <TextField95 />
      </div>
      <div className=" justify-end flex  h-auto p-4 m-5 rounded-md">
        <ToggleDark />
      </div>
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

function Profile() {
  return (
    <>
      <div className="rounded-full h-24 w-24 ml-3">
        <img className="object-contain rounded-full h-24 w-24" width="6rem" height="6rem" alt="profile pic" src="https://avatars.githubusercontent.com/u/58731523?v=4" />
      </div>
      <div className="mt-5 dark:text-white font-bebas tracking-wider px-3 text-gray-900">WRITTEN BY</div>
      <div className="my-1 dark:text-red-100 font-bebas tracking-wider px-3 text-red-400">ELIA</div>
      <div className="my-1 dark:text-white w-2/3 font-bebas tracking-wider px-3 text-gray-900">Hello! I made this site because a web developer must have one!</div>
    </>
  );
}

function Box(props) {
  return (
    <div className="box h-72 m-4 text-center p-5 bg-red-200 rounded-md">
      <h4 className="">{props.value}</h4>
    </div>
  );
}

const repositoryService = new RepositoryService();
repositoryService.setRepository = [{ name: 'deepSpace-vscodetheme' }, { name: 'e8266_crypto_gadget' }, { name: 'golang-notion-gitlab-xml' }, { name: 'ecommerce' }];
class Body extends React.Component<any, any> {
  subscription: Subscription | undefined;
  constructor(props) {
    super(props);
    this.state = {
      repo: [],
    };
  }

  componentDidMount() {
    this.subscription = repositoryService
      .getAllRepositoryInfo()
      .pipe(tap((data) => (data ? this.setState({ repo: data }) : this.setState({ repo: [] }))))
      .subscribe();
  }

  componentWillUnmount() {
    this.subscription?.unsubscribe();
  }

  render() {
    const { repo } = this.state;
    return (
      <div>
        <h5 className="px-5 text-8xl font-bebas text-gray-900 dark:text-white underline">GIT REPO</h5>
        <div className="grid grid-cols-3 gap-4 h-scren">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {repo.map((info, index) => (
              <Card95 key={index} value={info} />
            ))}
          </div>

          <div className="col-span-1 p-5 w-auto ">
            <RightBar />
          </div>
        </div>
      </div>
    );
  }
}
document.getElementById('root')?.classList.add('h-screen');

ReactDOM.render(
  <React.StrictMode>
    <div className="transition duration-500 ease-in-out bg-light dark:bg-gray-800 h-auto" key="1">
      <Header />
      <Body />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
