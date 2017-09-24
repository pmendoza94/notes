import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class NoteService {
  notes = [];

  noteObserver = new BehaviorSubject(this.notes);

  constructor(private _http: Http) { }

  create(note) {
    console.log('*** create **** service')
    return this._http.post('/create_note', note) 
    .map( data => data.json() )
    .toPromise();
   }

  getNote(){
    console.log('******** getNote service *********')
    return this._http.get('/create_notee')
    .map( data => data.json() )
    .toPromise();
  }
}
