import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonResponse } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: PokemonResponse[] = [];
  isLoading: boolean = true;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.pokemonService.getPokemons(0).subscribe({
      next: (response) => {
        const urls = response.map((pokemon) => pokemon.url);
        this.pokemonService.getPokemonsData(urls).subscribe({
          next: (details) => {
            this.pokemons = details;
            this.isLoading = false;
          },
          error: (err) => {
            console.error('Error fetching Pokémon details:', err);
            this.isLoading = false;
          },
        });
      },
      error: (err) => {
        console.error('Error fetching Pokémon list:', err);
        this.isLoading = false;
      },
    });
  }
}
