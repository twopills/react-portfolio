import { IRepoSettings, IRepository } from 'config/Structure.interface';
import { combineLatest, distinctUntilChanged, filter, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class RepositoryService {
  private _listRepo: Array<IRepoSettings> | Observable<IRepoSettings>[] = [];

  set setRepository(list: Array<IRepoSettings>) {
    this._listRepo = list;
  }

  private findRepositoryInfo(repoSettings: IRepoSettings): Observable<IRepository> {
    return ajax.get(`https://api.github.com/repos/twopill/${repoSettings.name}`).pipe(
      filter((data) => !!data),
      map(({ response }: any) => {
        console.log('REPONSE:', response);
        return {
          name: response?.name ? response.name : '',
          description: response?.description ? response.description : 'Default description for this Card',
          license: response?.license?.name ? response.license?.name : 'No license',
          url: response?.clone_url ? response.clone_url : '',
          buttons: repoSettings?.buttons ? repoSettings.buttons : ['File', 'Edit', 'Save'],
          style: response.style,
          language: response.language ? response.language : 'json',
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
