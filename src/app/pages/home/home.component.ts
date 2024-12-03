import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response.results;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching Pokemons:', err);
        this.isLoading = false;
      },
    });
  }
}
