import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [];
  note = {
    content: '',
    created_at: new Date()
  }
  constructor(private _noteservice: NoteService) {
    this._noteservice.noteObserver.subscribe((notes) => {
      this.notes = notes
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('** onSubmit **')
    this._noteservice.create(this.note).then((data) => {
      this.notes.push(this.note)
      console.log(this.notes)
      this.note = {
        content: '',
        created_at: new Date()
      }

    })
    
  }
  
}
