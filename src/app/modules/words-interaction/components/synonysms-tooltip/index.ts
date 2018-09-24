import { Component, OnChanges, Input } from '@angular/core';

import { Synonysm } from '../../interfaces/synonysm';
import { Word } from '../../word';

@Component({
  selector: 'app-synonysms-tooltip',
  templateUrl: './synonysms-tooltip.template.html',
  styleUrls: ['./synonysms-tooltip.styles.css']
})
export class SynonysmsTooltipComponent implements OnChanges {
  @Input() word: Word;
  dismissed = true;
  synonysms: Synonysm[] = [];

  ngOnChanges() {
    this.dismissed = false;
    this.word
      .fetchSynonyms()
      .subscribe((synonysms: Synonysm[]) => {
        this.synonysms = synonysms;
      });
  }

  getStyle() {
    const position: DOMRect = this.word.getPosition();

    return {
      top: `${position.y}px`,
      left: `${position.x}px`,
    };
  }

  replaceWithSynonysm(event, synonysm: Synonysm) {
    event.preventDefault();

    this.word.replaceContent(synonysm.word);
    this.word.replaceNode();
  }

  dismiss() {
    this.dismissed = true;
  }
}
