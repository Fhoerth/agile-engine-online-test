import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ControlPanelComponent } from './components/control-panel';
import { WordsInteractionComponent } from './components/words-interaction';
import { SynonysmsTooltipComponent } from './components/synonysms-tooltip';

import { DataMuseAPIService } from './services/data-muse-api';
import { FormatService } from './services/format';
import { SelectionService } from './services/selection';

@NgModule({
  declarations: [
    ControlPanelComponent,
    WordsInteractionComponent,
    SynonysmsTooltipComponent,
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
    SelectionService,
  ],
})
export class WordsinteractionModule { }
