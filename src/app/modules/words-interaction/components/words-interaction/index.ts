import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { Word } from '../../word';
import { Format } from '../../interfaces/format';
import { SelectionService } from '../../services/selection';

@Component({
  selector: 'app-words-interaction',
  templateUrl: './words-interaction.component.html',
  styleUrls: ['./words-interaction.component.css'],
})
export class WordsInteractionComponent implements OnInit {
  selectedWord: Word;
  @ViewChild('content') content: ElementRef;

  constructor(private selectionService: SelectionService) {
  }

  handleDblClick() {
    const selectedWord = this.selectionService.getSelectedWord(this.content);

    if (selectedWord) {
      this.selectedWord = selectedWord;
    }
  }

  onFormat(format: Format) {
  }

  ngOnInit() {
  }
}
