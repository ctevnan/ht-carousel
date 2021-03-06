import { Component } from 'angular2/core';

import { CSSCarouselComponent } from './carousel.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="wrapper">
  <css-carousel></css-carousel>
  </div>
  `,
  styles: [`
  .wrapper{
    width: 60%;
    margin: 60px auto;
  }
`],
  directives: [CSSCarouselComponent, HeaderComponent]
})
export class AppComponent { }