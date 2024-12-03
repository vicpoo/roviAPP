export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }>;
}
