import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'relative-pitch';

  /**
   * FIXMe: make a loop in the future as this will be come quite big
   */
  allPianoNotes: Record<string, string> =  {
    "C4": "assets/audio/PianoC4.wav",
    "D4": "assets/audio/PianoD4.wav",
    "D4#": "assets/audio/PianoD4#.wav",
    "E4": "assets/audio/PianoE4.wav",
    "F4": "assets/audio/PianoF4.wav",
    "F4#": "assets/audio/PianoF4#.wav",
    "G4": "assets/audio/PianoG4.wav",
    "G4#": "assets/audio/PianoG4#.wav",
    "A4": "assets/audio/PianoA4.wav",
    "A4#": "assets/audio/PianoA4#.wav",
    "B4": "assets/audio/PianoB4.wav",
  }


  ngOnInit() {

  }

  playRandomSound() {
    var audio = new Audio();
    audio.src = "assets/audio/PianoC4.wav";
    audio.play();
  }
}
