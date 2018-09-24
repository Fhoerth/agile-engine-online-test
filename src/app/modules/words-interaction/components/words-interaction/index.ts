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
  selectedWord: Word|null;
  @ViewChild('content') content: ElementRef;

  constructor(private selectionService: SelectionService) {
  }

  handleDblClick() {
    this.selectedWord = this.selectionService.getSelectedWord(this.content);
  }

  onFormat(format: Format) {
    if (this.selectedWord) {
      this.selectedWord.toggleFormat(format);
      this.selectedWord.replaceNode();
    }
  }

  ngOnInit() {
  }
}
