import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
  <div class="search">
    <input type="text" class="search__input" placeholder="Ciudad.." [formControl]="inputSearch"/>
  </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  implements OnInit{
  inputSearch = new FormControl('');
  @Output() submited = new EventEmitter<string>();


  constructor(){}

  ngOnInit(): void {
    this.onChange()
  }


  private onChange(): void {
    this.inputSearch.valueChanges.
    pipe(
      map((search)=> search?.trim()), //
      debounceTime(850), // Espera un argumento y luego lo emite despues de los segundos puestos
      distinctUntilChanged(), // Devolvera un operador siempre y cuando no sea el mismo ya emitido
      filter((search) => search !== ''), //Validara que la busqueda no sea un balor vacio
      tap((search) => this.submited.emit(search)) //Recivira un valor y lo enviara al componente padre
    )
    .subscribe(

    )
  }
}
