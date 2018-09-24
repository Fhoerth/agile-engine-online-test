interface IOptions {
  content: string;
  range: Range;
}

export class Word {
  content: String;
  range: Range;

  constructor(options: IOptions) {
    const { content, range } = options;

    this.content = content;
    this.range = range;
  }

  fetchSynonysms() {}
}
