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
  images: Array<string>
}
export const useBasketStore = defineStore('basket', () => {
  const basket = ref<IProduct[]>([])

  const getBasket = computed(()=> basket.value);

  const addToBasketProduct = (product: IProduct) => {
    basket.value.push(product)
  }

  const getCount = (product: IProduct) => {
    return basket.value.reduce((acc, el)=>{
      if(product.id === el.id){
        acc++;
      }
      return acc;
    }, 0)
  }

  return {
    getBasket,
    addToBasketProduct,
    getCount
  }
})