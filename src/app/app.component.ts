import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _wikipediaService: WikipediaService) {}
  title = 'wsearch';
  pages= [];

  onTerm(term: string) {
    this._wikipediaService.search(term).subscribe((pages: any)=> {
      this.pages= pages     
    })
  }
}
