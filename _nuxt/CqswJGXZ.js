import u from"./BBpG9rrv.js";import{f as x,i as f,j as b,l as n,o as a,c as i,a as e,t as o,k as s,F as v,r as w,b as y,h as k}from"./iC0uCuGW.js";import{u as j,q as C}from"./Cssql1mx.js";import{u as D}from"./DtaW1FYF.js";import{f as A}from"./BcWussCh.js";import"./BDQY-v1E.js";import"./CGq0Dc3R.js";import"./CyZThKHt.js";import"./IKqeFK0m.js";import"./DcR2SP72.js";import"./CtNBfZbv.js";const B={class:"mt-8"},N={class:"text-center"},q={class:"lg:text-5xl text-3xl text-blue-500 font-bold mb-3"},F=e("p",{class:"font-sans text-base font-light xl:w-2/4 lg:w-3/4 mx-auto"},o("Here's a list of all my blog posts"),-1),M=e("div",{class:"flex my-6 justify-center"},[e("div",{class:"w-16 h-1 rounded-full bg-blue-500 inline-flex"})],-1),$={key:0,class:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-2 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"},E=["href"],H={class:"flex max-w-sm rounded-xl flex-col items-start justify-between overflow-hidden hover:bg-indigo-10 hover:scale-105 hover:shadow-2xl transition shadow transform duration-300"},I={style:{height:"148px"},class:"w-full"},L={class:"group relative px-3"},P={class:"mt-3 text-lg leading-6 font-semibold hover:text-blue-500 text-gray-500 group-hover:text-gray-600 md:text-md overflow-hidden md:overflow-visible whitespace-nowrap md:whitespace-normal text-ellipsis"},R=e("span",{class:"absolute inset-0"},null,-1),S={class:"line-clamp-2 min-h-8"},T={class:"pt-2 line-clamp-3 text-sm leading-6 text-gray-500"},V={class:"flex items-center gap-x-2 text-xs mt-2 py-2 px-3"},z=["datetime"],G=e("span",{to:"#",class:"relative z-10 rounded-md bg-blue-100 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-300"},"Category",-1),J={key:1,class:"text-2xl text-center"},ie=x({__name:"index",async setup(O){let l,c;const p=f(()=>`${k().path}/`),{data:r}=([l,c]=b(()=>j(()=>C("/blog/").where({draft:{$eq:!1}}).sort({date:-1}).find(),"$NjJfml0E8M")),l=await l,c(),l),d=n("Peter's Random Musings"),g=n("Blog :: Godwin Peter .O"),m=n("List of articles in the blog");return D({title:g.value,description:m.value,ogTitle:d.value,ogDescription:m.value,ogImage:"https://godwin.dev//images/placeholder.webp",twitterCard:"summary_large_image"}),(h,K)=>{const _=u;return a(),i("div",B,[e("div",N,[e("div",q,o(s(d)),1),F,M]),s(r)!==null&&s(r).length>0?(a(),i("div",$,[(a(!0),i(v,null,w(s(r),t=>(a(),i("a",{key:t.id,href:s(p)+t.slug},[e("article",H,[e("header",I,[y(_,{src:"/images/placeholder.webp","image-class":"rounded-t-xl h-36 w-96 object-cover",alt:"placeholder"})]),e("section",L,[e("h3",P,[R,e("div",S,o(t.title),1)]),e("p",T,o(t.description),1)]),e("footer",V,[e("time",{datetime:t.publishedAt,class:"text-gray-500"},o(s(A)(t.publishedAt)),9,z),G])])],8,E))),128))])):(a(),i("div",J,o("Not Found")))])}}});export{ie as default};
