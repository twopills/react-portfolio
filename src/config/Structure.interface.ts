export interface IRepository {
  name: string;
  description: string;
  license: { name: string };
  url: string;
  buttons?: Array<string>;
}

export interface IRepoSettings {
  name: string;
  buttons?: Array<string>;
}
