import { BehaviorSubject, combineLatest, distinctUntilChanged, tap } from 'rxjs';

export class UIFacade {
  private _initState = {};
  private _store$ = new BehaviorSubject<any>(this._initState);

  constructor() {}

  private _state$ = this._store$.pipe(
    tap((state) => console.log('UI FACADE STATE: : ', state)),
    distinctUntilChanged()
  );

  vm$ = combineLatest([this._state$]).pipe(tap(([state]) => console.log('VM state: ', state)));
}
