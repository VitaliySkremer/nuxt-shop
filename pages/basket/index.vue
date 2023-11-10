<template>
  <ul class="list__products" >
    <li
        v-for="product in store.getBasket"
        :key="product.id"
        class="list__item"

    >
      <Product :isBuy="false" :product="product"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useBasketStore} from "~/store/basketStore";

const store = useBasketStore();

definePageMeta({
  name: 'basket',
  layout: 'default',
})

useHead({
  title: 'Корзина'
})

</script>

<style scoped>

</style>