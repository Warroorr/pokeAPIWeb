<template>
  <div class="flex items-center bg-white border rounded-lg shadow-md p-4 w-[400px] mx-auto">
  <img :src="pokemon.image" :alt="pokemon.name" class="w-24 h-24 mr-4" />
    <div>
      <h2 class="text-xl font-semibold capitalize">{{ pokemon.name }}</h2>
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Pokemon} from "@/models/Pokemon";

defineProps<{
  pokemon: Pokemon
}>()
</script>
