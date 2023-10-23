import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPagina } from '../models/i-pagina';

@Injectable()

export class NotificadorService {

  private _notif: Subject<IPagina> = new Subject<IPagina>();

  constructor() { }

  get observer$() : Observable<IPagina> {
    return this._notif.asObservable();
  }

  newPage(pagina : IPagina) {
    this._notif.next(pagina);
  }
}
