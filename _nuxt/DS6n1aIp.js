import f from"./CSHfxRU5.js";import g from"./D_sjEyaR.js";import{f as v,h as x,i as p,j as y,o as _,c as b,k as a,l as C,w as i,m as w,a as t,t as n,b as k}from"./B2RQt_Sz.js";import{u as D,q as B}from"./7XPfnUBZ.js";import{u as S}from"./DVtLtbR6.js";import{f as q}from"./BcWussCh.js";import"./BaU-QSLR.js";import"./BsYmvPZw.js";import"./CkA83ai6.js";import"./CA9DpnXj.js";const A={class:"markdown"},N={class:"space-y-8"},V={class:"text-center p-8 border-b"},$={class:"text-5xl font-bold mb-4"},j={class:"text-base font-light line-clamp-2"},G={class:"mt-4"},O={class:"text-sm uppercase font-normal rounded-lg bg-blue-100 px-3 py-1.5"},P={class:"text-2xl"},R=t("div",{class:"text-center"},[t("h1",null,"Document is empty")],-1),W=v({__name:"[...slug]",async setup(E){let o,c;const l=x(),m=p(()=>l.params.slug.toString()),{data:e}=([o,c]=y(()=>D(()=>B("/blog/").where({slug:{$eq:m.value}}).findOne(),"$ij35HG41ph")),o=await o,c(),o),u=p(()=>{var r;return((r=e.value)==null?void 0:r._path)??""});return e.value!==null&&S({title:e.value.title+" :: Godwin Peter .O",ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description,ogImage:e.value.image,twitterCard:"summary_large_image"}),(r,H)=>{const d=f,h=g;return _(),b("div",A,[a(l).params.slug?(_(),C(h,{key:0,path:a(u)},{default:i(({doc:s})=>[t("div",N,[t("div",V,[t("h1",$,n(s.title),1),t("p",j,n(s.description),1),t("div",G,[t("span",O,n(a(q)(s.createdAt)),1)])]),k(d,{value:s},null,8,["value"])])]),"not-found":i(()=>[t("h1",P,"Content ("+n(a(m))+") not found",1)]),empty:i(()=>[R]),_:1},8,["path"])):w("",!0)])}}});export{W as default};
