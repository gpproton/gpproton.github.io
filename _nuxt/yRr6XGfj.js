import{am as s,s as t,o as d,$ as r,as as l,ai as i}from"./CEFc7DJ4.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=s.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,m,n,c,o,a){return a.inline?t(e.$slots,"default",{key:0}):o.mounted?(d(),r(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
