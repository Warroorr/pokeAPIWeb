export interface PokemonInfo {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: Images;
}

export interface BasicPokemonInfo {
    name: string;
    url: string;
}

export interface PokemonListInfo {
    results: [];
    next: boolean;
}

export interface Images {
    front_default: string;
}