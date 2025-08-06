<template>
  <h1 class="text-3xl font-bold text-center my-8">Listado de Pokémon</h1>

  <div v-if="pending" class="text-center text-gray-600">Cargando...</div>
  <div v-if="error" class="text-red-500 text-center">Error al cargar los datos</div>

  <div class="flex flex-col items-center gap-6">
    <div
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        class="flex items-center max-w-2xl w-full bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden"
    >
      <div class="w-40 h-40 flex items-center justify-center bg-gray-100">
        <img
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name"
            class="w-24 h-24 object-contain"
        />
      </div>
      <div class="p-4 flex-1">
        <h2 class="text-xl font-bold capitalize mb-2">{{ pokemon.name }}</h2>
        <p><span class="font-semibold">ID:</span> {{ pokemon.id }}</p>
        <p><span class="font-semibold">Altura:</span> {{ pokemon.height }}</p>
        <p><span class="font-semibold">Peso:</span> {{ pokemon.weight }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const limit = ref(10)
const pokemons = ref([])

const { data: list, pending, error } = await useFetch(() => {
  return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit.value}`
})

if (list.value) {
  pokemons.value = await Promise.all(
      list.value.results.map(async (pokemon: { name: string; url: string }) => {
        return await $fetch(pokemon.url)
      })
  )
}
</script>
