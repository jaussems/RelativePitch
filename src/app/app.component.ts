import {Component, computed, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  note = signal('');
  randomNote = signal('');
  rightNotePressed = signal(false);

  /**
   * FIXMe: make a loop in the future as this will be come quite big
   */
  allPianoNotes: Record<string, string> =  {
    "C4": "assets/audio/PianoC4.wav",
    "C4#": "assets/audio/PianoC4_sharp.wav",
    "D4": "assets/audio/PianoD4.wav",
    "D4#": "assets/audio/PianoD4_sharp.wav",
    "E4": "assets/audio/PianoE4.wav",
    "F4": "assets/audio/PianoF4.wav",
    "F4#": "assets/audio/PianoF4_sharp.wav",
    "G4": "assets/audio/PianoG4.wav",
    "G4#": "assets/audio/PianoG4_sharp.wav",
    "A4": "assets/audio/PianoA4.wav",
    "A4#": "assets/audio/PianoA4_sharp.wav",
    "B4": "assets/audio/PianoB4.wav",
  }

  playPianoNote(note: string) {
   var audio = new Audio();
   audio.src = this.allPianoNotes[note];
   audio.play();
   this.note.set(note);
     this.checkNote();
  }

  checkNote() {
    let isCorrectNote = this.note() === this.randomNote();
    this.rightNotePressed.set(isCorrectNote);
  }

  playRandomNote() {
    let randomNumber = Math.floor(Math.random() * Object.keys(this.allPianoNotes).length)
    let randomPianoNote  = Object.keys(this.allPianoNotes)[randomNumber]
    var audio = new Audio();
    audio.src = this.allPianoNotes[randomPianoNote];
    audio.play();
    this.randomNote.set(randomPianoNote);

  }

}
