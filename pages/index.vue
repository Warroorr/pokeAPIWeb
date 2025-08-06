<template>
  <div class="max-w-3xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Listado de Pokémon</h1>

    <div v-if="pending" class="text-center">Cargando...</div>
    <div v-else-if="error" class="text-center text-red-500">Error al cargar los datos de los Pokémon</div>

    <ul v-if="pokemons.length" class="space-y-6">
      <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          class="flex gap-6 bg-white shadow-md rounded-lg p-4"
      >
        <div class="w-32 h-32 flex-shrink-0 flex items-center justify-center">
          <img
              :src="pokemon.sprites.other['official-artwork'].front_default"
              :alt="pokemon.name"
              class="w-full h-full object-contain"
          />
        </div>

        <div class="flex flex-col justify-center">
          <h3 class="text-xl font-semibold capitalize mb-2">{{ pokemon.name }}</h3>
          <p><strong>ID:</strong> {{ pokemon.id }}</p>
          <p><strong>Altura:</strong> {{ pokemon.height }}</p>
          <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const limit = ref(20);
const pokemons = ref([]);

const {data: list, pending, error} = await useFetch(() => {
  return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit.value}`;
});

if (list.value) {
  pokemons.value = await Promise.all(
      list.value.results.map((pokemon: { name: string, url: string }) => {
        return $fetch(pokemon.url);
      })
  );
}


</script>