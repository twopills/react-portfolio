import { BehaviorSubject, combineLatest, distinctUntilChanged, tap } from 'rxjs';

export class ToggleService {
  static _initState = { icon: null, toggle: true };
  static _store$ = new BehaviorSubject<any>(this._initState);

  constructor() {}

  static _state$ = this._store$.pipe(
    tap((state) => console.log('state: ', state)),
    distinctUntilChanged()
  );

  toggle$ = combineLatest([ToggleService._state$]).pipe(tap(([state]) => console.log('VM state: ', state)));

  static updateState(state: { icon: string; toggle: boolean }) {
    this._store$.next({ state, ...this._initState });
  }
}
