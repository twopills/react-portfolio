// src/index.tsx
import React from 'react'; // { Component, ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import { TextField95 } from './ui/95/95_search';
// @ts-ignore
import { ToggleDark } from './ui/darkMode/toggleDarkMode.tsx';
//import { Card95 } from './ui/95/95_window';
import { RepositoryService } from './service/Repository.service';
import { map, Subscription, tap } from 'rxjs';
// import { IRepository } from 'config/Structure.interface';
// import { Test } from './ui/testAnimation/effect_1';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Home } from './ui/pages/home';
function Header(): JSX.Element {
  return (
    <div className="absolute grid grid-cols-2">
      <div className="w-2/4 h-auto p-4 m-5 rounded-md">{/* <TextField95 /> */}</div>
      <div className=" justify-end flex  h-auto p-4 m-5 rounded-md">
        <ToggleDark />
      </div>
    </div>
  );
}

function RightBar(props) {
  return (
    <div className="xl:fixed md:fixed sm:relative mt-40 mx-auto">
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

const repositoryService = new RepositoryService();
repositoryService.setRepository = [
  { name: 'deepSpace-vscodetheme' },
  { name: 'e8266_crypto_gadget' },
  { name: 'golang-notion-gitlab-xml' },
  { name: 'ecommerce' },
  { name: 'go_api_postgreSQL' },
];

class CurrentWorks extends React.Component<any, any> {
  subscription: Subscription | undefined;
  constructor(props) {
    super(props);
    this.state = {
      repo: [],
      isHover: false,
    };
  }

  private _linearGradient = [
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
    'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
  ];

  componentDidMount() {
    this.subscription = repositoryService
      .getAllRepositoryInfo()
      .pipe(
        map((data) => {
          data.map((data, index) => {
            data.style = this._linearGradient[index];
            return data;
          });
          return data;
        }),
        tap((data) => (data ? this.setState({ repo: data }) : this.setState({ repo: [] })))
      )
      .subscribe();
  }

  componentWillUnmount() {
    this.subscription?.unsubscribe();
  }

  setBackgroundImageText(event: any, property: string) {
    event.target.style.backgroundImage = property;
  }

  takeData(props) {
    // console.log('PROPS HOVER: ', props);
  }

  render() {
    const { repo } = this.state;
    return (
      <div className="__other-page dark:bg-gray-800">
        <h5 className="px-20 pt-3 text-8xl font-bebas text-gray-900 dark:text-white underline">CURRENT WORKS</h5>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 h-auto">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-h-1">
            {repo.map((info, index) => (
              <div
                className="__box m-12 rounded-md grid grid-rows-3 cursor-pointer"
                onMouseLeave={() => {
                  this.setState({ isHover: false });
                }}
                onMouseOver={() => {
                  this.setState({ isHover: true });
                  this.takeData(info);
                }}
                style={{ backgroundImage: info.style }}
              >
                <>
                  <div className="font-bebas text-gray-900 px-5 py-5 flex justify-end items-start ">
                    <div className="">
                      <img alt="github icon" src="https://img.icons8.com/material-outlined/24/000000/github.png" />
                    </div>
                  </div>
                  <div className="font-bebas text-gray-900 flex justify-center items-end text-2xl">{info?.name}</div>
                  <div className="font-bebas tracking-widest text-gray-900 font-semibold flex justify-center px-5 items-center text-xl">{info?.language}</div>
                </>
              </div>
            ))}
          </div>
          {/* <div className="col-span-1 p-5 w-auto">
            <RightBar />
          </div> */}
        </div>
      </div>
    );
  }
}
document.getElementById('root')?.classList.add('h-screen');
document.getElementById('root')?.classList.add('w-screen');

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="transition duration-500 ease-in-out bg-light dark:bg-gray-800 " key="1"> */}
    <Header />
    {/* <Parallax pages={4} className="h-screen max-h-screen overflow-y-scroll snap-type-y-mandatory"> */}
    <div className="h-screen max-h-screen overflow-y-scroll snap-type-y-mandatory overflow-x-hidden">
      {/* <ParallaxLayer offset={0} speed={0.5}> */}
      <div className="scroll-snap-align-start">
        <Home key={1} />
      </div>
      {/* <ParallaxLayer className="scroll-snap-align-start" offset={0.95} speed={0.5}> */}
      <div>
        {<CurrentWorks key={1} />}
        {/* <div className="__other-page"></div> */}
      </div>
      {/* <ParallaxLayer className="scroll-snap-align-start" offset={1.4} speed={1} style={{ backgroundColor: '#ff6d6d', height: '100vh', width: '100vw' }}> */}
      {/* <div className="" style={{ backgroundColor: '#ff6d6d', height: '100vh', width: '100vw' }}>
        <p className="text-3xl">Scroll up</p>
      </div> */}
    </div>

    {/* <Test></Test> */}
  </React.StrictMode>,
  document.getElementById('root')
);
