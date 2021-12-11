import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useState } from 'react';
import { useTrail, a, animated } from 'react-spring';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 55, tension: 500, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 200 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.span key={index} style={style}>
          <a.span style={{ height }}>{items[index]}</a.span>
        </a.span>
      ))}
    </>
  );
};

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div className="h-screen w-screen dark:bg-gray-800">
        <div className="flex flex-col items-center h-full w-full justify-center ">
          <Trail open={true}>
            <div className="text-9xl text-red-400 font-lato font-black tracking-widest">I AM ELIA</div>
            <div className="text-xl dark:text-white text-black-900 font-lato font-normal tracking-normal">
              Hello! I made this site because a <span className="text-red-400 font-bold">web developer</span> must have one!
            </div>
            <div className="text-xl dark:text-white text-black-900 font-lato font-normal tracking-normal">
              I build software solutions using <span className="text-red-400 font-bold">Angular</span>, <span className="text-red-400 font-bold">React</span> and{' '}
              <span className="text-red-400 font-bold">Go</span>.
            </div>
          </Trail>
        </div>
      </div>
    );
  }
}
