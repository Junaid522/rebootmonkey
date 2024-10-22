import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

interface Monkey {
  display: string;
}

@Component({
  selector: 'rm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  monkeys: Monkey[] = [];

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ) { }

  logoUrl = '../../../assets/icon-black.webp';
  logoPositions: { top: string, left: string, opacity: number }[] = [];

  ngOnInit() {
    this.generateRandomLogoPositions();
  }

  // generateRandomLogoPositions() {
  //   const logoCount = 96; // Adjust the number of logos
  // const minMargin = 8; // Adjust the minimum margin between logos in percentage

  // this.logoPositions = [];

  // for (let i = 0; i < logoCount; i++) {
  //   const position: { top: string, left: string, opacity: number } = this.generateRandomPositionWithOpacityAndMargin(minMargin);

  //   if (this.isPositionInsideYellowSection(position)) {
  //     this.logoPositions.push(position);
  //   }
  // }
  // }

  generateRandomLogoPositions() {
    const logoCount = 90;
    let minMargin = 8; // Adjust the minimum margin between logos in percentage  
    this.logoPositions = [];
  
    // Check device width and adjust logoCount accordingly
    let adjustedLogoCount = logoCount;
    if (window.innerWidth <= 768) { // Assuming mobile width <= 768px
      minMargin = 10;
      adjustedLogoCount = Math.floor(logoCount * 0.5); // Reduce by 50% for mobile
    } else if (window.innerWidth <= 1024) { // Assuming tablet width <= 1024px
      minMargin = 12;
      adjustedLogoCount = Math.floor(logoCount * 0.75); // Reduce by 25% for tablet
    }
  
    const positionsBatch = [];
    for (let i = 0; i < adjustedLogoCount; i++) {
      const position = {
        top: this.getRandomPercentage(),
        left: this.getRandomPercentage(),
        opacity: this.getRandomOpacity()
      };
  
      if (this.isPositionInsideYellowSection(position)) {
        positionsBatch.push(position);
      }
    }
  
    // Check overlaps for the entire batch
    for (const newPosition of positionsBatch) {
      if (!this.hasOverlap(newPosition, minMargin)) {
        this.logoPositions.push(newPosition);
      }
    }
  }
  

  generateRandomPositionWithOpacityAndMargin(minMargin: number, maxAttempts: number = 1000): { top: string, left: string, opacity: number } {
    let position: { top: string, left: string, opacity: number };
    let attempts = 0;
  
    do {
      position = {
        top: this.getRandomPercentage(),
        left: this.getRandomPercentage(),
        opacity: this.getRandomOpacity()
      };
  
      attempts++;
  
      if (attempts > maxAttempts) {
        console.error('Exceeded maximum attempts to generate a non-overlapping position.');
        break;
      }
    } while (this.hasOverlap(position, minMargin));
  
    return position;
  }

  getRandomOpacity(): number {
    return Math.random() * (0.12 - 0.02) + 0.02; // Random opacity between 0.05 and 0.1
  }

  hasOverlap(newPosition: { top: string, left: string, opacity: number }, minMargin: number): boolean {
    for (const existingPosition of this.logoPositions) {
      const distance = this.calculateDistance(newPosition, existingPosition);
      if (distance < minMargin) {
        return true; // Overlapping
      }
    }
  
    return false; // No overlap
  }

  calculateDistance(position1: { top: string, left: string, opacity: number }, position2: { top: string, left: string, opacity: number }): number {
    const dx = parseFloat(position1.left) - parseFloat(position2.left);
    const dy = parseFloat(position1.top) - parseFloat(position2.top);
    return Math.sqrt(dx * dx + dy * dy);
  }

  getRandomPercentage(): string {
    return Math.floor(Math.random() * 99) + '%'; // Adjust the range based on your layout
  }

  isPositionInsideYellowSection(position: { top: string; left: string }): boolean {
    const yellowSectionWidth = 100; // Adjust based on your layout
    const yellowSectionHeight = 100; // Adjust based on your layout
    return (
      parseFloat(position.top) <= yellowSectionHeight &&
      parseFloat(position.left) <= yellowSectionWidth
    );
  }
  openContactUs() {
    // this.layoutService.setContactUsVisible(true);
    this.router.navigate(['contact-us'])
  }
}
