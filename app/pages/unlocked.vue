<script setup lang="ts">
// You no longer need the store or router here for the guard!

// This special function tells Nuxt to run the 'auth' middleware before
// rendering this page. The filename 'auth.ts' becomes 'auth'.
definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Geryon was a monster'
})
</script>

<template>
  <div>
    <div class="p-4 text-2xl">
      Geryon was a monster everything about him was red.
    </div>
  </div>
</template>

<style scoped>
</style>