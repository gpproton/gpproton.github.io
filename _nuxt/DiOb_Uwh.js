import y from"./QjSw9hrN.js";import b from"./CIJ9uV9r.js";import{f as C,h as w,i as h,j as k,o as i,c,k as l,l as D,w as p,m as B,a as t,t as n,F as S,r as q,b as A}from"./DTw-eYQA.js";import{u as N,q as V}from"./BXvXmG0F.js";import{u as $}from"./B8qG9YiR.js";import{f as j}from"./BcWussCh.js";import"./KkfQhxbW.js";import"./BsYmvPZw.js";import"./Bss4Uzuw.js";import"./BFFZP_bR.js";const F={class:"markdown"},G={class:"space-y-8"},O={class:"text-center p-8 border-b"},P={class:"text-5xl font-bold mb-4"},R={class:"text-base font-light line-clamp-2 lg:px-32"},T={class:"mt-4 space-y-2"},E={class:"px-1 space-x-2"},H={class:""},I={class:"text-sm uppercase font-normal"},L={class:"text-2xl"},M=t("div",{class:"text-center"},[t("h1",null,"Document is empty")],-1),st=C({__name:"[...slug]",async setup(z){let r,m;const u=w(),_=h(()=>u.params.slug.toString()),{data:e}=([r,m]=k(()=>N(()=>V("/blog/").where({slug:{$eq:_.value}}).findOne(),"$ij35HG41ph")),r=await r,m(),r),g=h(()=>{var s;return((s=e.value)==null?void 0:s._path)??""});e.value!==null&&$({title:e.value.title+" :: Godwin Peter .O",ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description,ogImage:e.value.image,twitterCard:"summary_large_image"});const f=s=>{if(s===void 0)return[];const o=s.split(",");return o.length>7?o.slice(0,o.length-1):o};return console.log(e.value),(s,o)=>{const x=y,v=b;return i(),c("div",F,[l(u).params.slug?(i(),D(v,{key:0,path:l(g)},{default:p(({doc:a})=>[t("div",G,[t("div",O,[t("h1",P,n(a.title),1),t("p",R,n(a.description),1),t("div",T,[t("div",E,[(i(!0),c(S,null,q(f(a.tags),d=>(i(),c("span",{key:d,class:"text-sm text-blue-500 font-normal rounded-lg bg-blue-100 px-3 py-1.5"},n(d),1))),128))]),t("div",H,[t("span",I,n(l(j)(a.publishedAt)),1)])])]),A(x,{value:a},null,8,["value"])])]),"not-found":p(()=>[t("h1",L,"Content ("+n(l(_))+") not found",1)]),empty:p(()=>[M]),_:1},8,["path"])):B("",!0)])}}});export{st as default};
