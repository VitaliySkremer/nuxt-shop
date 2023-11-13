import {defineStore} from "pinia";

export interface IProduct {
  category: string,
  description: string,
  id: number,
  thumbnail: string,
  price: number,
  rating: number,
  brand: string,
  title: string,
  images: Array<string>,
  count: number;
}
export const useBasketStore = defineStore('basket', () => {
  const basket = ref<Map<number, IProduct>>(new Map())

  const getBasket = computed(()=> basket.value);
  const totalPrice = computed(()=> {
    let result = 0;
    for(let value of basket.value.values()){
      result += value.price * value.count
    }

    return result;
  })

  const addToBasketProduct = (product: IProduct) => {
    const prod = basket.value.get(product.id)
    
    if(prod){
        basket.value.set(product.id, {...prod, count: prod.count + 1});
    } else {
      basket.value.set(product.id, {...product, count: 1});
    }

  }

  const removeItemProduct = (product: IProduct) => {
    const prod = basket.value.get(product.id)

    if(prod && prod.count > 1){
      basket.value.set(product.id, {...prod, count: prod.count - 1});
    }
  }

  const getCount = (product: IProduct) => {
    if(basket.value.has(product.id)){
      return basket.value.get(product.id)?.count
    }
    return 0
  }

  return {
    getBasket,
    addToBasketProduct,
    getCount,
    removeItemProduct,
    totalPrice
  }
})