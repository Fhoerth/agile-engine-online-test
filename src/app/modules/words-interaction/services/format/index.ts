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

  applyFormat = (format: Format, word: string): string =>
    `<${format.tag}>${word}</${format.tag}>`
  format = (formatsToApply: Format|Format[], word: string): string => Array.isArray(formats)
    ? (formatsToApply as Format[]).reduce((formattedWord, format) => this.applyFormat(format, formattedWord), word)
    : this.applyFormat((formatsToApply as Format), word)

  removeFormat = (format: Format, word: string): string =>
    word.replace(format.openingTagRe, '').replace(format.closingTagRe, '')
  clean = (word: string): string =>
    this.formats.reduce((formattedWord, format) => this.removeFormat(format, formattedWord), word)


  isFormatApplied = (format: Format, word: string): boolean => format.tagRe.test(word);
  /**
   * retrieves a list of formats applied to a word
   */
  retrieveAppliedFormats = (word: string) =>
    this.formats.filter(format => this.isFormatApplied(format, word))
}
