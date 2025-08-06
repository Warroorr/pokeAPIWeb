import type {Pokemon, PokemonListInfo} from "~/models/Pokemon";

export async function fetchPokemonList(page: number, limit: number = 10) {
    const offset = (page - 1) * limit
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return await $fetch<PokemonListInfo>(url);
}

export async function fetchPokemonDetails(url: string): Promise<Pokemon> {
    const data = await $fetch<any>(url)
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        sprites:{
            front_default: data.sprites.front_default
        }
    }
}