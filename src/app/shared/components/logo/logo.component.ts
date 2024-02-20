import { Component, Input } from '@angular/core';

export interface LogoInterface {
  id: string;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  @Input() data: LogoInterface | undefined;
}