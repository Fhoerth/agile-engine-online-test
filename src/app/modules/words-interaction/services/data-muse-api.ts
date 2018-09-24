import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Synonysm } from '../interfaces/synonysm';

@Injectable({
  providedIn: 'root',
})
export class DataMuseAPIService {
  constructor(
    private http: HttpClient,
  ) { }

  private buildUrl(word: string): string {
    return `https://api.datamuse.com/words?rel_syn=${word.trim()}&s&max=5`;
  }

  fetchSynonyms(word: string): Observable<Synonysm[]> {
    const url = this.buildUrl(word);

    return this.http
      .get<Synonysm[]>(url);
  }
}
