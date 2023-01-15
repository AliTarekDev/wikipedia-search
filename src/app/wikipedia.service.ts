import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, pluck} from 'rxjs';

interface wikipediaResponse {
  query: {
    search: {
      title: string,
      pageid: number,
      snippet: string
    }[];
  };
};
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<any> {
    return this.http.get<wikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action:"query",
        list: "search",
        format: "json",
        utf8: '1',
        srsearch: term,
        origin: "*"
      }
    }).pipe(
      pluck('query', 'search')
    )
  }
}
