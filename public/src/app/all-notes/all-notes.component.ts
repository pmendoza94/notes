import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx'

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  noteObserverable;
  notes = [];

  constructor(private _noteservice: NoteService) {
    this._noteservice.getNote()
      .then(data => {
        console.log(data);
        
      })
    }
   

  ngOnInit() {
  }

}
