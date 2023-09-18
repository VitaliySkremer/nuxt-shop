<template>
    <ul v-loading.fullscreen="pending">
        <li v-for="product in products" :key="product.id">
          {{ product.title }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { appFetch } from '~/AppFetch/appFetch';
import { useCategoriesStore } from '~/store/categoriesStore';

const store = useCategoriesStore();
const route = useRoute();

const { pending, data:products } = appFetch(`https://fakestoreapi.com/products/category/${store.getCategories.get(Number(route.params.id))}`)

definePageMeta({
  name: 'products',
  layout: 'default'
})

</script>

<style scoped>

</style>