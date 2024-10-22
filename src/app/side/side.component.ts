import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { products } from 'src/app/_constants/products.const';
import { services } from 'src/app/_constants/services.const';
import { menu } from '../_constants/menu.const';

@Component({
  selector: 'rm-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  @Input() state: boolean = false;
  @Output() stateChange = new EventEmitter();
  serviceLinks = services;
  productLinks = products;
  menu = menu;


  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      this.close();

    })
  }

  open() {
    this.state = true;
  }
  
  close() {
    this.stateChange.emit()
  }

}
