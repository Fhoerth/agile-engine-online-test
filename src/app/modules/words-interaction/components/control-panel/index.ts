import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Format } from '../../interfaces/format';
import { FormatService } from '../../services/format';

import { Word } from '../../word';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Input() word: Word;
  @Output() format = new EventEmitter<Format>();
  formats: Format[];

  constructor(private formatService: FormatService) {}

  ngOnInit() {
    this.formats = this.formatService.formats;
  }

  applyFormat(format: Format) {
    this.format.emit(format);
  }
}
