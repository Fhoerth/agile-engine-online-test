import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { SelectionService } from '../../services/selection';

@Component({
  selector: 'app-words-interaction',
  templateUrl: './words-interaction.component.html',
  styleUrls: ['./words-interaction.component.css'],
})
export class WordsInteractionComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  constructor(private selectionService: SelectionService) {
  }

  handleDblClick() {
    console.log(this.selectionService.getSelectedWord(this.content));
  }

  ngOnInit() {
  }
}
