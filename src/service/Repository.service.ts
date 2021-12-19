import { IRepoSettings, IRepository } from 'config/Structure.interface';
import { combineLatest, distinctUntilChanged, filter, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

class _RepositoryService {
  private _listRepo: Array<IRepoSettings> | Observable<IRepoSettings>[] = [];

  set setRepository(list: Array<IRepoSettings>) {
    this._listRepo = list;
  }

  private replaceUnderscoreWithEmpty(value: string): string {
    return value.replaceAll('_', ' ');
  }

  private convertDate(date: Date): string {
    const addZero = (arg: number): string => (arg < 10 ? `0${arg}` : `${arg}`);
    return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${addZero(date.getFullYear())}`;
  }

  private findRepositoryInfo(repoSettings: IRepoSettings): Observable<IRepository> {
    return ajax.get(`https://api.github.com/repos/twopill/${repoSettings.name}`).pipe(
      filter((data) => !!data),
      map(({ response }: any) => {
        console.log('REPONSE:', response);
        return {
          name: response?.name ? this.replaceUnderscoreWithEmpty(response.name) : '',
          description: response?.description ? response.description : 'Default description for this Card',
          license: response?.license?.name ? response.license?.name : 'No license',
          url: response?.clone_url ? response.clone_url : '',
          buttons: repoSettings?.buttons ? repoSettings.buttons : ['File', 'Edit', 'Save'],
          style: response.style,
          language: response.language ? response.language : 'Json',
          createAt: response.created_at ? this.convertDate(new Date(response.created_at)) : '',
        };
      })
    );
  }

  public getAllRepositoryInfo(): Observable<Array<IRepository>> {
    const allObservable: Observable<IRepository>[] = this._listRepo.map((name: any) => (name = this.findRepositoryInfo(name)));

    return combineLatest(allObservable).pipe(
      filter((data) => !!data),
      distinctUntilChanged()
    );
  }
}

export const RepositoryService = new _RepositoryService();
