import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term= '';
  @Output() submitted= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onInput(e: any) {
    this.term= e.target.value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);    
  }

}
