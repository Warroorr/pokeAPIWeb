<template>
  <nav class="flex justify-center items-center gap-2 mt-8 flex-wrap">
    <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
    >
      Anterior
    </button>

    <button
        v-for="page in pagesToShow"
        :key="page"
        @click="changePage(page)"
        :class="[
        'px-3 py-1 border rounded',
        page === currentPage ? 'bg-gray-300 font-bold' : 'hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>

    <button
        @click="changePage(currentPage + 1)"
        :disabled="!hasNext"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
    >
      Siguiente
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  hasNext: boolean
}>()

const emit = defineEmits<{
  (e: 'pageChange', page: number): void
}>()

function changePage(page: number) {
  if (page !== props.currentPage && page > 0) {
    emit('pageChange', page)
  }
}

const pagesToShow = computed(() => {
  const pages = []
  const start = Math.max(1, props.currentPage - 2)
  const end = props.currentPage + 2

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script>
