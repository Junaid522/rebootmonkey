import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() auto!: boolean;
  
  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.ensureVideoPlays();
    }, 1000);
  }

  ensureVideoPlays() {
    const video = document.querySelector("video");

    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}

}
