import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rm-stuff-only',
  templateUrl: './stuff-only.component.html',
  styleUrls: ['./stuff-only.component.scss']
})
export class StuffOnlyComponent {
  password!: string;

  constructor() { }

  enterPassword() {
    localStorage.setItem('stuffPassword', this.password);
    window.location.reload();
  }

}
