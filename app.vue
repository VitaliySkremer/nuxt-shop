<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute()
const layout = computed(()=> route.layout)

</script>
