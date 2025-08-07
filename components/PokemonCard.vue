<template>
  <div class="pokemon-card">
    <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        class="pokemon-image"
    />
    <div class="pokemon-info">
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Pokemon} from "~/models/Pokemon";
import "@/assets/css/card.css";

interface Props {
  pokemon: Pokemon
}

defineProps<Props>();
</script>
