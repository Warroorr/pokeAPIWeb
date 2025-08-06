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
import PokemonCard from '@/components/PokemonCard.vue';
import type {BasicPokemonInfo, PokemonInfo} from '~/models/PokemonInfo';

const limit = 10;
const offset = computed(() => (currentPage.value - 1) * limit);
const route = useRoute();
const router = useRouter();
const pokemons = computed<PokemonInfo[]>(() => data.value?.pokemons || []);
const currentPage = computed(() => Number(route.query.page || 1));
const hasNext = computed(() => data.value?.hasNext || false);

const { data, pending, error } = await useAsyncData(
    () => `pokemons-page-${currentPage.value}`,
    async () => {
      const list = await $fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit}`)

      const detailed = await Promise.all(
          list.results.map(async (pokemon: BasicPokemonInfo) => {
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
        pokemons: detailed,
        hasNext: !!list.next
      }
    }
)


function goToPage(newPage: number) {
  if (newPage < 1 || newPage === currentPage.value) return
  router.push({ query: { page: newPage } })
}

</script>

