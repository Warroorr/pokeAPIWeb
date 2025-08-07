<template>
  <nav class="paginator">
    <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        :class="['paginator-button', { disabled: currentPage === 1 }]"
    >
      Anterior
    </button>

    <button
        v-for="page in pagesToShow"
        :key="page"
        @click="changePage(page)"
        :class="[
        'paginator-button',
        { active: page === currentPage }
      ]"
    >
      {{ page }}
    </button>

    <button
        @click="changePage(currentPage + 1)"
        :disabled="!hasNext"
        :class="['paginator-button', { disabled: !hasNext }]"
    >
      Siguiente
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '@/assets/css/paginator.css';

interface Props {
  currentPage: number,
  hasNext: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'pageChange', page: number): void
}>()

function changePage(page: number) {
  if (page !== props.currentPage && page > 0) {
    emit('pageChange', page);
  }
}

const pagesToShow = computed(() => {
  const pages = [];
  const start = Math.max(1, props.currentPage - 2);
  const end = props.currentPage + 2;

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
})
</script>
