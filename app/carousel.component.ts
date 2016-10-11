import {Component} from 'angular2/core';

import {Image} from './image.interface';

@Component({
  selector: 'css-carousel',
  template: `
  <div class="carousel">

  <ul class="slides">

    <li *ngFor="#image of images">
    <h2>{{image.title}}</h2>
    <img src="{{image.url}}" alt="">
    </li>
  </ul>
</div>
`,

styles: [`
]    
})