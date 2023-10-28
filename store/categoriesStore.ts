import { defineStore } from "pinia";
import { appFetch } from "~/AppFetch/appFetch";

export interface ICategories {
    title: string,
    id: number
}

export const useCategoriesStore = defineStore('categories', ()=>{
    const categories = ref(new Map());

    const getCategories = computed(()=> categories.value)


    const getCategoriesFetch = async () =>{
        try{
            const { data } = await appFetch('https://dummyjson.com/products/categories')
            categories.value = new Map(
                data.value.map((item, index)=>{
                    return [index, item]
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