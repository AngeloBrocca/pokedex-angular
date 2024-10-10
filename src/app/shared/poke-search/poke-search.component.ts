import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit{
  @Output() public emmitSearch: EventEmitter<String> = new EventEmitter();

  ngOnInit(): void {
    
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
