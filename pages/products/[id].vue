<template>
  <ul class="list__products" v-loading.fullscreen="pending">
    <li
      v-for="product in data?.products"
      :key="product.id"
      class="list__item"
      
    >
      <Product :product="product"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { appFetch } from '~/AppFetch/appFetch';
import { useCategoriesStore } from '~/store/categoriesStore';

const store = useCategoriesStore();
const route = useRoute();

const { pending, data } = appFetch(`https://dummyjson.com/products/category/${store.getCategories.get(Number(route.params.id))}`,{
  pick:['products']
})

definePageMeta({
  name: 'products',
  layout: 'default'
})

</script>

<style scoped>

.list__products {
  --gap: 30px;
  --width: 25%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.list__item {
  width: calc(var(--width) - var(--gap));
  margin: calc(var(--gap) / 2);
}


</style>