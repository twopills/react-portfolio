import { BehaviorSubject, combineLatest, distinctUntilChanged, tap } from 'rxjs';

export class ToggleService {
  private _initState = { icon: null, toggle: true };
  private _store$ = new BehaviorSubject<any>(this._initState);

  constructor() {}

  private _state$ = this._store$.pipe(
    tap((state) => console.log('state: ', state)),
    distinctUntilChanged()
  );

  toggle$ = combineLatest([this._state$]).pipe(tap(([state]) => console.log('VM state: ', state)));

  updateState(state: { icon: string; toggle: boolean }) {
    this._store$.next({ state, ...this._initState });
  }
}
