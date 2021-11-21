import { IRepoSettings, IRepository } from 'config/Structure.interface';
import { combineLatest, distinctUntilChanged, filter, map, Observable, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class RepositoryService {
  constructor() {}
  private listOfRepo: Array<Observable<any>> | Array<IRepoSettings> = [];

  set setRepository(list: Array<IRepoSettings>) {
    this.listOfRepo = list;
  }
  private findRepositoryInfo(repoSettings: IRepoSettings): Observable<any> {
    return ajax.get(`https://api.github.com/repos/twopill/${repoSettings.name}`).pipe(
      filter((data) => !!data),
      map((data: any) => {
        const { response } = data;
        return {
          name: response.name ? response.name : '',
          description: response.description ? response.description : 'Default description for this Card',
          license: response.license?.name ? response.license?.name : 'No license',
          url: response.clone_url ? response.clone_url : '',
          buttons: repoSettings.buttons ? repoSettings.buttons : ['File', 'Edit', 'Save'],
        };
      })
    );
  }
  public getAllRepositoryInfo(): Observable<Array<IRepository>> {
    const allObservable: Observable<any>[] = this.listOfRepo.map((name: any) => (name = this.findRepositoryInfo(name)));
    return combineLatest(allObservable).pipe(distinctUntilChanged());
  }
}
