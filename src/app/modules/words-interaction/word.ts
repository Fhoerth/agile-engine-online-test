import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Synonysm } from './interfaces/synonysm';
import { Format } from './interfaces/format';
import { FormatService } from './services/format';
import { DataMuseAPIService } from './services/data-muse-api';

interface IOptions {
  content: string;
  range: Range;
  formatService: FormatService;
  dataMuseAPIService: DataMuseAPIService;
}

export class Word {
  content: string;
  range: Range;
  formats: Format[];
  formatService: FormatService;
  dataMuseAPIService: DataMuseAPIService;
  fetchingSynonysms = false;
  fetchSynonysmsSuccess = false;

  constructor(options: IOptions) {
    const { content, range, formatService, dataMuseAPIService } = options;

    this.formatService = formatService;
    this.dataMuseAPIService = dataMuseAPIService;
    this.content = formatService.clean(content);
    this.formats = formatService.retrieveAppliedFormats(content);
    this.range = range;
  }

  replaceContent(content: string) {
    this.content = content;
  }

  getPosition(): DOMRect {
    return <DOMRect>this.range.getBoundingClientRect();
  }

  getFormattedWord(): string {
    return this.formatService.format(this.formats, this.content);
  }

  isFormatApplied(format: Format): boolean {
    return !!this.formats.find(_ => _ === format);
  }

  toggleFormat(format: Format): void {
    if (this.isFormatApplied(format)) {
      const idx = this.formats.findIndex(_ => _ === format);

      this.formats = this.formats.slice(0, idx)
        .concat(this.formats.slice(idx + 1, this.formats.length));
    } else {
      this.formats = this.formats.concat(format);
    }
  }

  replaceNode(): void {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = this.getFormattedWord();

    this.range.deleteContents();
    this.range.insertNode(contentDiv.childNodes[0]);
  }

  fetchSynonyms = (): Observable<Synonysm[]> => {
    this.fetchingSynonysms = true;
    this.fetchSynonysmsSuccess = false;

    return this.dataMuseAPIService
      .fetchSynonyms(this.content)
      .pipe(
        tap(() => {
          this.fetchSynonysmsSuccess = true;
          this.fetchingSynonysms = false;
        }),
      );
  }
}
