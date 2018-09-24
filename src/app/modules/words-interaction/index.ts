import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ControlPanelComponent } from './components/control-panel';
import { WordsInteractionComponent } from './components/words-interaction';

import { DataMuseAPIService } from './services/data-muse-api';

@NgModule({
  declarations: [
    ControlPanelComponent,
    WordsInteractionComponent,
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
    WordsInteractionComponent,
  ],
  providers: [
    DataMuseAPIService,
  ],
})
export class WordsinteractionModule { }
