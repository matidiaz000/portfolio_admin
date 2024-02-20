import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public onSearch() {
    console.log("Hiciste click en el boton de buscar")
  }

}