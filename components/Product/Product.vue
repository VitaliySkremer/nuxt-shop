<template>
  <el-card
      :body-style="{ padding: '0px' }"
      body-class="list__item-body-content"
      class="list__item-body"
  >
    <el-image
        :src="product.image"
        lazy
        fit="cover"
        class="product__img"

    />
    <div class="product__body">
      <el-rate
          v-model="product.rating.rate"
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
  </el-card>
</template>

<script setup lang="ts">
import {QuestionFilled} from "@element-plus/icons-vue";

interface IProduct {
  product: {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
      count: 400,
      rate: number
    },
    title: string
  }
}

defineProps<IProduct>()
</script>

<style scoped>

.list__item-body {
  min-height: 350px;
}

.product__img {
  width: 100%;
  height: 250px;
}

.product__body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

</style>