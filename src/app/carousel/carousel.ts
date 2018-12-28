import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/450/300?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
}
