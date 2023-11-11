<template>
  <ul class="list__products" >
    <li
        v-for="[key, value] in store.getBasket"
        :key="key"
        class="list__item"

    >
      <Product :isBuy="false" :product="value"/>
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