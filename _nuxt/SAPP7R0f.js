import{_ as k}from"./CuLLIt5S.js";import T from"./CDjwnLKW.js";import{f as D}from"./BcWussCh.js";import{e as S,g as $,h as g,i as q,o as n,c as l,j as o,a as t,t as r,F as A,r as B,b as f,w as p}from"./DgZWQ7re.js";import{u as R,q as j}from"./CI6xsy15.js";import{u as F}from"./BPNwSTh5.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./kcpUpDx6.js";const G={class:"mt-20 p-1"},M={key:0,class:"space-y-1"},N={class:"lg:p-8 p-1 border-b text-center"},O={class:"lg:text-5xl text-3xl line-clamp-2 text-blue-500 font-bold mb-4 md:mb-2"},V={class:"text-base font-light line-clamp-3 lg:px-32"},E={class:"mt-4 space-y-2"},H={class:"px-1 space-x-2"},I={class:""},L={class:"text-sm uppercase font-normal"},P={class:"w-full"},z={key:1,class:"flex text-2xl text-center"},se=S({__name:"[...slug]",async setup(J){let a,c;const h=$(),v=g(()=>h.params.slug.toString()),{data:b}=([a,c]=q(()=>R(()=>j("/blog/").where({slug:{$eq:v.value}}).findOne(),"$ij35HG41ph")),a=await a,c(),a),e=g(()=>b.value);e.value!==null&&F({title:e.value.title+" :: Godwin Peter .O",ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description,ogImage:e.value.image,twitterCard:"summary_large_image"});const y=i=>{if(i===void 0)return[];const s=i.split(",");return s.length>7?s.slice(0,s.length-1):s};return(i,s)=>{var d,u,m,_;const w=k,C=T;return n(),l("div",G,[o(e)?(n(),l("div",M,[t("div",N,[t("h1",O,r((d=o(e))==null?void 0:d.title),1),t("p",V,r((u=o(e))==null?void 0:u.description),1),t("div",E,[t("div",H,[(n(!0),l(A,null,B(y((m=o(e))==null?void 0:m.tags),x=>(n(),l("span",{key:x,class:"text-sm text-blue-500 font-normal rounded-lg bg-blue-100 px-3 py-1.5"},r(x),1))),128))]),t("div",I,[t("span",L,r(o(D)((_=o(e))==null?void 0:_.publishedAt)),1)])])]),f(C,{value:o(e)},{default:p(()=>[t("div",P,[f(w,{class:"prose max-w-none prose-neutral prose-headings:no-underline prose-a:no-underline prose-a:text-gray-500 hover:prose-a:text-blue-500 prose-inline-code:rounded-xl prose-inline-code:border prose-sm lg:prose-lg xl:prose-xl",value:o(e)},null,8,["value"])])]),"not-found":p(()=>s[0]||(s[0]=[t("div",{class:"flex text-2xl text-center"},[t("h1",null,"This post doesn't exist")],-1)])),empty:p(()=>s[1]||(s[1]=[t("div",{class:"flex text-2xl text-center"},[t("h1",null,"This post doesn't exist")],-1)])),_:1},8,["value"])])):(n(),l("div",z,s[2]||(s[2]=[t("h1",null,"This post doesn't exist",-1)])))])}}});export{se as default};
