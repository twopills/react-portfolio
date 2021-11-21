export interface IRepository {
  name: string;
  description: string;
  license: { name: string };
  url: string;
  buttons?: Partial<IRepoSettings>;
}

export interface IRepoSettings {
  name: string;
  buttons?: Array<string>;
}
