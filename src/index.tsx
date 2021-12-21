import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// @ts-ignore
import { ToggleDark } from './ui/darkMode/toggleDarkMode.tsx';
import { RepositoryService } from './service/Repository.service';
import { map, Subscription, tap } from 'rxjs';
import { Home } from './ui/pages/home';
import { IRepository } from 'config/Structure.interface';
function Header(): JSX.Element {
  return (
    <div className="absolute grid grid-cols-2">
      <div className="w-2/4 h-auto p-4 m-5 rounded-md"></div>
      <div className=" justify-end flex  h-auto p-4 m-5 rounded-md">
        <ToggleDark />
      </div>
    </div>
  );
}

// const repositoryService = new RepositoryService();
RepositoryService.setRepository = [
  { name: 'No-Reddit-Announcements' },
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
    this.subscription = RepositoryService.getAllRepositoryInfo()
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

  render() {
    const { repo } = this.state;
    return (
      <div className="bg-gray-800 pt-20">
        <div className="grid grid-cols-6 h-auto px-24">
          <div className="col-span-2 border-white h-96 mt-48 sticky top-0 ">
            <div className="grid grid-rows-2 text-lato">
              <div className="text-7-exl  text-sabbia leading-none">Current works</div>
              <div className=" text-2xl text-sabbia font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className="text-red-400 font-bold">Dolores incidunt</span> illo earum cumque, praesentium, illum,
                error molestiae sunt quasi et quos adipisci. Est ratione esse quas <span className="text-red-400 font-bold">perspiciatis</span> delectus eveniet nulla.
              </div>
            </div>
          </div>
          <div className="col-span-4 flex justify-center">
            <div className={`inline-grid grid-cols-2 grid-rows-${Math.round(repo.length / 2)}`}>
              {repo.map((info: IRepository, index) => (
                <div className="p-5" key={index}>
                  <div className={`font-lato p-12 grid grid-rows-3 bg-gray-700 rounded-md w-30 h-30 text-sabbia ${index % 2 !== 0 ? 'mt-10' : ''}`}>
                    <div className="flex w-full h-full">
                      <div className="text-3xl font-medium">{info?.language}</div>
                    </div>
                    <div className="flex w-full h-full mt-3">
                      <div className="text-xl font-light">{info?.createAt}</div>
                    </div>
                    <div className="flex w-full h-full row-span-4 mt-3">
                      <div className="text-xl font-light">{info?.license}</div>
                    </div>
                    <div className="flex w-full h-full row-end-auto">
                      <div className="text-5xl break-words capitalize font-black">{info?.name}</div>
                    </div>
                    <div className="flex w-full h-full mt-5 row-end-auto">
                      <div className="text-lg font-thin" onClick={() => window.open(info?.url)}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white cursor-pointer">
                          <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
document.getElementById('root')?.classList.add('h-screen');
document.getElementById('root')?.classList.add('w-screen');

ReactDOM.render(
  <React.StrictMode>
    <div className="transition duration-500 ease-in-out " key="1">
      <Header />
      <div className="h-screen max-h-screen overflow-y-scroll snap-type-y-mandatory overflow-x-hidden">
        <div className="scroll-snap-">
          <Home key={1} />
        </div>
        <div>{<CurrentWorks />}</div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
