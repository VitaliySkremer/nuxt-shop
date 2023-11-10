import { defineStore } from "pinia";
import { appFetch } from "~/AppFetch/appFetch";

export const useCategoriesStore = defineStore('categories', ()=>{
    const categories = ref(new Map());

    const getCategories = computed(()=> categories.value)


    const getCategoriesFetch = async () =>{
        try{
            const { data } = await appFetch<string[]>('https://dummyjson.com/products/categories')
            categories.value = new Map(
                data.value?.map((item, index)=>{
                    const key = index + 1;
                    return [key.toString(), item]
                })
            )
        }
        catch(e: any){
            throw new Error(e)
        }
    }

    return {
        getCategories,
        getCategoriesFetch
    }
})