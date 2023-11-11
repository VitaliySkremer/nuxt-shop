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
      <div v-if="!isBuy">
        {{  product.count  }}
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
  ElMessage.success({
    showClose: true,
    message: `${props.product.title} добавлен. Колличество ${store.getCount(props.product)}`,
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

</style>