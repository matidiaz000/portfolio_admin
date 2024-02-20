import { Component, Input } from '@angular/core';

export interface BannerInterface {
  query?: string;
  title: string;
  description: string;
  image: string;
  background: boolean;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent {
  @Input() data: BannerInterface | undefined;
  constructor() {
    console.log(this.data)
  }
}