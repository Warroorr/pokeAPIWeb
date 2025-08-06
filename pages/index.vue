<template>
  <div>
    <div v-if="pending">Cargando...</div>
    <div v-if="error">Error al cargar los datos</div>

    <div v-if="pokemons.length" class="flex flex-col gap-4">
      <PokemonCard
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
import type { Pokemon } from '~/models/Pokemon';

const limit = 10;
const offset = 0;

const { data, pending, error } = await useAsyncData(
    () => `pokemons-page-${offset%10}`,
    async () => {
      const list = await $fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit}`)

      const detailed = await Promise.all(
          list.results.map(async (pokemon: { name: string; url: string }) => {
            const data = await $fetch(pokemon.url)
            return {
              id: data.id,
              name: data.name,
              height: data.height,
              weight: data.weight,
              image: data.sprites.front_default,
            }
          })
      )

      return {
        pokemons: detailed
      }
    }
)

const pokemons = computed<Pokemon[]>(() => data.value?.pokemons || []);

</script>

