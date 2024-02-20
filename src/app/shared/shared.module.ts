import { NgModule } from '@angular/core';
import { Components, Modules } from './shared.config';

@NgModule({
    imports:        [ Modules ],
    exports:        [ Modules, Components ],
    declarations:   [ Components ],
    providers:      []
})
 
export class SharedModule {}