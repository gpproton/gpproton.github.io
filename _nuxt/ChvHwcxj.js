import x from"./BPQ_WpUL.js";import{_ as f}from"./CBN43Kdj.js";import{f as w,i as v,j as y,r as n,o as a,c as i,a as e,t as o,k as s,F as b,n as k,l as C,w as j,b as B,h as D}from"./B2RQt_Sz.js";import{u as A,q as N}from"./7XPfnUBZ.js";import{u as q}from"./DVtLtbR6.js";import{f as F}from"./BcWussCh.js";import"./ko-LASN7.js";import"./DA-rVhWz.js";import"./Byyu23ks.js";import"./B685SzOV.js";import"./C7h0Dp9v.js";import"./CkA83ai6.js";const M={class:"mt-8"},$={class:"text-center"},E={class:"text-5xl text-blue-500 font-bold mb-3"},H=e("p",{class:"font-sans text-base font-light xl:w-2/4 lg:w-3/4 mx-auto"},o("Here's a list of all my blog posts"),-1),I=e("div",{class:"flex my-6 justify-center"},[e("div",{class:"w-16 h-1 rounded-full bg-blue-500 inline-flex"})],-1),L={key:0,class:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-2 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"},P={class:"flex max-w-sm rounded-xl flex-col items-start justify-between overflow-hidden hover:bg-indigo-10 hover:scale-105 hover:shadow-2xl transition shadow transform duration-300"},R={style:{height:"148px"},class:"w-full"},S={class:"group relative px-3"},T={class:"mt-3 text-lg leading-6 font-semibold hover:text-blue-500 text-gray-500 group-hover:text-gray-600 md:text-md overflow-hidden md:overflow-visible whitespace-nowrap md:whitespace-normal text-ellipsis"},V=e("span",{class:"absolute inset-0"},null,-1),z={class:"line-clamp-2 min-h-8"},G={class:"pt-2 line-clamp-3 text-sm leading-6 text-gray-500"},J={class:"flex items-center gap-x-2 text-xs mt-2 py-2 px-3"},O=["datetime"],K=e("span",{to:"#",class:"relative z-10 rounded-md bg-blue-100 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-300"},"Category",-1),Q={key:1,class:"text-2xl text-center"},ce=w({__name:"index",async setup(U){let r,c;const _=v(()=>`${D().path}/`),{data:l}=([r,c]=y(()=>A(()=>N("/blog/").where({draft:{$eq:!1}}).sort({date:-1}).find(),"$NjJfml0E8M")),r=await r,c(),r),d=n("Peter's Random Musings"),p=n("Blog :: Godwin Peter .O"),m=n("List of articles in the blog");return q({title:p.value,description:m.value,ogTitle:d.value,ogDescription:m.value,ogImage:"https://godwin.dev//images/placeholder.webp",twitterCard:"summary_large_image"}),(g,W)=>{const h=x,u=f;return a(),i("div",M,[e("div",$,[e("div",E,o(s(d)),1),H,I]),s(l)!==null&&s(l).length>0?(a(),i("div",L,[(a(!0),i(b,null,k(s(l),t=>(a(),C(u,{key:t.id,to:s(_)+t.slug},{default:j(()=>[e("article",P,[e("header",R,[B(h,{src:"/images/placeholder.webp","image-class":"rounded-t-xl h-36 w-96 object-cover",alt:"placeholder"})]),e("section",S,[e("h3",T,[V,e("div",z,o(t.title),1)]),e("p",G,o(t.description),1)]),e("footer",J,[e("time",{datetime:t.createdAt,class:"text-gray-500"},o(s(F)(t.createdAt)),9,O),K])])]),_:2},1032,["to"]))),128))])):(a(),i("div",Q,o("Not Found")))])}}});export{ce as default};
