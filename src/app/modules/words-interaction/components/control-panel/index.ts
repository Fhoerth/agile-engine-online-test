import { Component, OnInit } from '@angular/core';

import { Format } from '../../interfaces/format';
import { FormatService } from '../../services/format';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  formats: Format[];

  constructor(private formatService: FormatService) {}

  ngOnInit() {
    this.formats = this.formatService.formats;
  }
}
