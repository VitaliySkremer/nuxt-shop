<template>
  <div class="wrapper">
    <el-text tag="strong" class="text-center total__price" size="large">
      Итоговая цена: {{ Intl.NumberFormat('en-US',{ style:'currency', currency: 'USD' }).format(store.totalPrice) }}
    </el-text>
    <ul class="list__products" >
      <li
          v-for="[key, value] in store.getBasket"
          :key="key"
          class="list__item"
      >
        <Product :isBuy="false" :product="value"/>
      </li>
    </ul>
  </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
}
.total__price {
  align-self: center;
  font-size: 32px;
}
</style>