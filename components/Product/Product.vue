<template>
  <el-card
      :body-style="{ padding: '0px' }"
      body-class="list__item-body-content"
      class="list__item-body"
  >
    <div
        class="product__img-wrapper"
        @click="visible = true"
    >
      <el-image
          :src="product.thumbnail"
          lazy
          fit="contain"
          class="product__img"
      />
    </div>
    <div class="product__body">
      <el-rate
          v-model="rating"
          disabled
          show-score
          style="align-self: flex-end"
      />
      <el-text tag="b" class="text-center" size="large" style="margin-bottom: 10px; line-height: 24px">
        {{ product.title }}
        <el-tooltip
            style="max-width: 400px"
            class="box-item"
            effect="dark"
            placement="top"
        >
          <template #content>
            <p style="max-width: 350px">
              {{ product.description }}
            </p>
          </template>
          <el-icon :size="16" style="margin-left: 3px">
            <QuestionFilled />
          </el-icon>
        </el-tooltip>
      </el-text>
      <el-text tag="b" class="text-center price" size="large">
        {{ Intl.NumberFormat('en-US',{ style:'currency', currency: 'USD' }).format(product.price) }}
      </el-text>
      <div class="product__count" v-if="!isBuy">
        <el-button @click="removeItemOnBasket" :disabled="product.count <= 1">
          -
        </el-button>
        <el-text tag="b" class="text-center count" size="large">
          {{  product.count  }}
        </el-text>
        <el-button  @click="addToBasket">
          +
        </el-button>
      </div>
      <el-button
          v-if="isBuy"
          type="primary"
          plain
          @click="addToBasket"
      >
        Добавить в корзина
      </el-button>
    </div>

    <el-dialog
        v-model="visible"
        :show-close="false"
    >
      <el-carousel :interval="10000000" indicator-position="outside">
        <el-carousel-item v-for="item in product.images" :key="item" class="info__wrapper">
          <NuxtImg
              class="img__info"
              :src="item"
              alt="image"
              loading="lazy"
          />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </el-card>
</template>

<script setup lang="ts">
import {QuestionFilled} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import type {IProduct} from "~/store/basketStore";
import {useBasketStore} from "~/store/basketStore";

interface IProductProps {
  product: IProduct,
  isBuy: boolean
}

const store = useBasketStore();

const props = defineProps<IProductProps>()

const rating = computed(() => Number(props.product.rating.toFixed(1)))

const visible = ref(false);

const addToBasket = () => {
  store.addToBasketProduct(props.product)
  viewMessageAlert(`${props.product.title} добавлен. Колличество ${store.getBasket.get(props.product.id)?.count}`)
}

const removeItemOnBasket = () => {
  store.removeItemProduct(props.product)
  viewMessageAlert(`${props.product.title} удалён. Колличество ${store.getBasket.get(props.product.id)?.count}`);
}

const viewMessageAlert = (ms: string) => {
  ElMessage.success({
    showClose: true,
    message: ms,
    type: 'success',
    duration: 1000,
  })
}
</script>

<style scoped>

.list__item-body {
  min-height: 350px;
}


.product__img-wrapper {
  width: 100%;
  height: 250px;
}

.product__img {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.product__img::after {
  content: '';
  position: absolute;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, .5);
  opacity: 0;
  transition: opacity .2s ease;
}

.product__img:hover::after {
  opacity: 1;
}

.product__body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.info__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img__info {
  height: 100%;
  object-fit: fill;
}
.product__count {
  display: flex;
  align-self: center;
  align-items: center;
}
.price {
  margin-bottom: 10px;
}
.count {
  padding: 10px;
}

</style>