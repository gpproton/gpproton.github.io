import{ac as n,ai as r,o,c as i,n as p,d,t as l,ag as g}from"./iC0uCuGW.js";import{s as c}from"./CyZThKHt.js";var u={root:function(a){var e=a.props,s=a.instance;return["p-badge p-component",{"p-badge-no-gutter":r.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":r.isEmpty(e.value)&&!s.$slots.default,"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warning":e.severity==="warning","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},v=n.extend({name:"badge",classes:u}),y={name:"BaseBadge",extends:c,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:v,provide:function(){return{$parentInstance:this}}},b={name:"Badge",extends:y,inheritAttrs:!1};function f(t,a,e,s,m,$){return o(),i("span",g({class:t.cx("root")},t.ptmi("root")),[p(t.$slots,"default",{},function(){return[d(l(t.value),1)]})],16)}b.render=f;export{b as default};