import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ControlPanelComponent } from './components/control-panel';
import { WordsInteractionComponent } from './components/words-interaction';

import { DataMuseAPIService } from './services/data-muse-api';
import { FormatService } from './services/format';

@NgModule({
  declarations: [
    ControlPanelComponent,
    WordsInteractionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    WordsInteractionComponent,
  ],
  providers: [
    DataMuseAPIService,
    FormatService,
  ],
})
export class WordsinteractionModule { }
