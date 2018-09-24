export interface Format {
  tag: string;
  label: string;
  title: string;
  openingTagRe: RegExp;
  closingTagRe: RegExp;
  tagRe: RegExp;
}
