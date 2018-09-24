import { FormatService } from './services/format';

interface IOptions {
  content: string;
  range: Range;
  formatService: FormatService;
}

export class Word {
  content: string;
  range: Range;
  formatService: FormatService;

  constructor(options: IOptions) {
    const { content, range, formatService } = options;

    this.formatService = formatService;
    this.content = formatService.clean(content);
    this.range = range;
  }

  replaceNode(): void {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = this.content;

    this.range.deleteContents();
    this.range.insertNode(contentDiv.childNodes[0]);
  }

  fetchSynonysms() {}
}
