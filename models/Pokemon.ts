export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: Images;
}

export interface RawPokemon {
    name: string;
    url: string;
}

export interface PokemonListInfo {
    count: number
    next: string | null
    previous: string | null
    results: RawPokemon[];
}

export interface Images {
    front_default: string;
}