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
    <Paginator
        :currentPage="currentPage"
        :hasNext="hasNext"
        @page-change="goToPage"
    />
  </div>
</template>

<script setup lang="ts">
import PokemonCard from '~/components/PokemonCard.vue';
import { fetchPokemonList, fetchPokemonDetails } from '@/services/pokemonService'
import type {Pokemon} from "~/models/Pokemon";

const limit = 10;
const route = useRoute();
const router = useRouter();
const pokemons = computed<Pokemon[]>(() => data.value?.pokemons || []);
const currentPage = computed(() => Number(route.params.page || 1));
const hasNext = computed(() => data.value?.hasNext || false);

const { data, pending, error } = await useAsyncData(
    () => `pokemons-page-${currentPage.value}`,
    async () => {
      const list = await fetchPokemonList(currentPage.value, limit)
      const details = await Promise.all(
          list.results.map(p => fetchPokemonDetails(p.url))
      )
      return {
        pokemons: details,
        hasNext: list.next !== null
      }
    }
)


function goToPage(newPage: number) {
  if (newPage < 1 || newPage === currentPage.value) return;
  router.push({ path: `/list/${newPage}` });
}

</script>

