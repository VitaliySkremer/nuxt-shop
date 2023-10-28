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
          fit="cover"
          class="product__img"
      />
    </div>
    <div class="product__body">
      <el-rate
          v-model="product.rating"
          disabled
          show-score
          text-color="#f7ba2a"
          score-template="{value}"
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
    </div>
    <el-dialog
        v-model="visible"
        :show-close="false"
    >
      <el-carousel interval="10000000" indicator-position="outside">
        <el-carousel-item v-for="item in product.images" :key="item">
          <NuxtImg :src="item" alt="image"/>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </el-card>
</template>

<script setup lang="ts">
import {QuestionFilled} from "@element-plus/icons-vue";

interface IProduct {
  product: {
    category: string,
    description: string,
    id: number,
    thumbnail: string,
    price: number,
    rating: number,
    brand: string,
    title: string,
    images: Array<string>
  }
}

defineProps<IProduct>()

const visible = ref(false);
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

</style>