import { ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';

import { FormatService } from './format';
import { Word } from '../word';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  illegalCharactersRe: RegExp = /[,.:\(\)\!\?\s]/;

  constructor(private formatService: FormatService) { }

  static getContainer(host: ElementRef, selectionContainer) {
    let { parentElement } = selectionContainer;

    while (parentElement !== host.nativeElement) {
      parentElement = parentElement.parentElement;
    }

    return parentElement;
  }

  getSelectedWord(host: ElementRef): Word|null {
    const selection: Selection = window.getSelection();
    const range: Range = selection.getRangeAt(0);

    if (range) {
      const container = range.commonAncestorContainer;

      // When a word is selected by a double click event, the browser selects
      // the text only.
      // If the word is wrapped by, for example, a "b" element,
      // the selection needs to be extended until it reaches the outter element.
      if (container.parentElement !== host.nativeElement) {
        const wrapper = SelectionService.getContainer(host, container);
        range.selectNode(wrapper);
      }

      const content = range.toString();

      // Make sure that the selected text, doesn't include "illegal" characters.
      if (!this.illegalCharactersRe.test(content)) {
        const div = document.createElement('div');
        div.appendChild(range.cloneContents());

        const wordContent = div.innerHTML;
        const word = new Word({
          range,
          content: wordContent,
          formatService: this.formatService,
        });

        return word;
      }

      return null;
    }
  }
}
