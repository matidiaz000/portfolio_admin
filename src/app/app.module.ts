import { NgModule } from '@angular/core';
import { Bootstrap, Modules } from './app.config';

@NgModule({
  declarations:     [ Bootstrap ],
  imports:          [ Modules ],
  bootstrap:        [ Bootstrap ]
})
export class AppModule { }