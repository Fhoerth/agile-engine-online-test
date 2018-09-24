import { Component, OnInit, Input } from '@angular/core';

import { Word } from '../../word';

@Component({
  selector: 'app-synonysms-tooltip',
  templateUrl: './synonysms-tooltip.template.html',
  styleUrls: ['./synonysms-tooltip.styles.css']
})
export class SynonysmsTooltipComponent implements OnInit {
  @Input() word: Word;
  @Input() show = true;

  ngOnInit() {
  }

  getStyle() {
    const position: DOMRect = this.word.getPosition();

    return {
      top: `${position.y}px`,
      left: `${position.x}px`,
    };
  }
}
