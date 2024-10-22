import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rm-offer-popup',
  templateUrl: './offer-popup.component.html',
  styleUrls: ['./offer-popup.component.scss']
})
export class OfferPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  constructor() { }

  buyNow() {
    window.open("https://wa.me/+31686006400")
    this.closePopup.emit()
  }
}
