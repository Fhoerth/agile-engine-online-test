import { NgModule } from '@angular/core';

import { ControlPanelComponent } from './components/control-panel';
import { WordsInteractionComponent } from './components/words-interaction';

@NgModule({
  declarations: [
    ControlPanelComponent,
    WordsInteractionComponent,
  ],
  imports: [],
  exports: [
    WordsInteractionComponent,
  ],
  providers: [],
})
export class WordsinteractionModule { }
