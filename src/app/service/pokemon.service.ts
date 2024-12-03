import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'; // Importar map
import { PokemonResponse, Pokemon } from '../interfaces/pokemon.interface'; // Importar interfaces

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/${name}`);
  }

  getPokemons(offset: number): Observable<Pokemon[]> {
    return this.http.get<{ results: Pokemon[] }>(`${this.apiUrl}?limit=50&offset=${offset}`).pipe(
      map((response: { results: Pokemon[] }) => response.results)
    );
  }

  getPokemonsData(urls: string[]): Observable<PokemonResponse[]> {
    const list = urls.map((url: string) => this.http.get<PokemonResponse>(url));
    return forkJoin(list);
  }
}
