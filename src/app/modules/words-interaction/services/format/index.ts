import { Injectable } from '@angular/core';

import { Format } from '../../interfaces/format';
import formats from './formats';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  formats: Format[];

  constructor() {
    this.formats = formats.map(format => ({
      ...format,
      openingTagRe: this.createOpeningTagRe(format.tag),
      closingTagRe: this.createClosingTagRe(format.tag),
      tagRe: this.createTagRe(format.tag),
    }));
  }

  createOpeningTagRe = (tag: string): RegExp => new RegExp(`<\s*${tag}[^>]*>`);
  createClosingTagRe = (tag: string): RegExp => new RegExp(`<\s*\/\s*${tag}>`);
  createTagRe = (tag: string): RegExp => {
    const openingTagRe = this.createOpeningTagRe(tag);
    const closingTagRe = this.createClosingTagRe(tag);

    return new RegExp(`${openingTagRe.source}(.*?)${closingTagRe.source}`);
  }
}
