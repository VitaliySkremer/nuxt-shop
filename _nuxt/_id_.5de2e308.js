import{_ as u}from"./Product.b5fc397a.js";import"./base.9f8ca0ff.js";import{u as _,a as d,v as l}from"./categoriesStore.a7daebef.js";import{l as g,Y as f,N as h,y as r,o as t,c as o,F as v,X as y,b as k}from"./entry.428a5e80.js";import"./button.3432f37f.js";import"./typescript.defaf979.js";import"./message.26cd6ff8.js";import"./popper.c2a74fde.js";import"./text.daf26325.js";import"./vue.f36acd1f.1a7a509e.js";import"./tooltip.e04c84ba.js";import"./_plugin-vue_export-helper.c27b6911.js";const x={class:"list__products"},Y=g({__name:"[id]",setup(B){const i=_(),a=f(),{pending:n,data:c}=d(`https://dummyjson.com/products/category/${i.getCategories.get(a.params.id)}`,{pick:["products"]});return(C,F)=>{var e;const p=u,m=l;return h((t(),o("ul",x,[(t(!0),o(v,null,y((e=r(c))==null?void 0:e.products,s=>(t(),o("li",{key:s.id,class:"list__item"},[k(p,{isBuy:"",product:s},null,8,["product"])]))),128))])),[[m,r(n),void 0,{fullscreen:!0}]])}}});export{Y as default};
