import{s as v}from"./CKgCTjWO.js";import{ac as k,o as n,c as o,F as g,r as y,ab as i,n as u,q as h,a as f,t as b,W as S,b as d,ai as m}from"./DuLTLirq.js";var M={root:function(t){var r=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":r.orientation==="horizontal","p-metergroup-vertical":r.orientation==="vertical"}]},metercontainer:"p-metergroup-meters",meter:"p-metergroup-meter",labellist:function(t){var r=t.props;return["p-metergroup-labels",{"p-metergroup-labels-vertical":r.labelOrientation==="vertical","p-metergroup-labels-horizontal":r.labelOrientation==="horizontal"}]},labellistitem:"p-metergroup-label",labelicon:"p-metergroup-label-icon",labellisttype:"p-metergroup-label-marker",label:"p-metergroup-label-text"},z=k.extend({name:"metergroup",classes:M}),V={name:"MeterGroup",extends:v,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:z,provide:function(){return{$parentInstance:this}}},P={name:"MeterGroupLabel",hostName:"MeterGroup",extends:v,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function C(e,t,r,p,O,a){return n(),o("ol",i({class:e.cx("labellist")},e.ptm("labellist")),[(n(!0),o(g,null,y(r.value,function(l,s){return n(),o("li",i({key:s+"_label",class:e.cx("labellistitem")},e.ptm("labellistitem")),[u(e.$slots,"icon",{value:l,class:h(e.cx("labelicon"))},function(){return[l.icon?(n(),o("i",i({key:0,class:[l.icon,e.cx("labelicon")],style:{color:l.color}},e.ptm("labelicon")),null,16)):(n(),o("span",i({key:1,class:e.cx("labellisttype"),style:{backgroundColor:l.color}},e.ptm("labellisttype")),null,16))]}),f("span",i({class:e.cx("label")},e.ptm("label")),b(l.label)+" ("+b(e.$parentInstance.percentValue(l.value))+")",17)],16)}),128))],16)}P.render=C;var G={name:"MeterGroup",extends:V,inheritAttrs:!1,methods:{getPTOptions:function(t,r,p){return this.ptm(t,{context:{value:r,index:p}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))},percentValue:function(t){return this.percent(t)+"%"},meterCalculatedStyles:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(t,r){return t+r.value},0))},percentages:function(){var t=0,r=[];return this.value.forEach(function(p){t+=p.value,r.push(t)}),r}},components:{MeterGroupLabel:P}},N=["aria-valuemin","aria-valuemax","aria-valuenow"];function A(e,t,r,p,O,a){var l=S("MeterGroupLabel");return n(),o("div",i({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a.totalPercent},e.ptmi("root")),[e.labelPosition==="start"?u(e.$slots,"label",{key:0,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[d(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):m("",!0),u(e.$slots,"start",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),f("div",i({class:e.cx("metercontainer")},e.ptm("metercontainer")),[(n(!0),o(g,null,y(e.value,function(s,c){return u(e.$slots,"meter",{key:c,value:s,index:c,class:h(e.cx("meter")),orientation:e.orientation,size:a.percentValue(s.value),totalPercent:a.totalPercent},function(){return[a.percent(s.value)?(n(),o("span",i({key:0,class:e.cx("meter"),style:a.meterCalculatedStyles(s)},a.getPTOptions("meter",s,c)),null,16)):m("",!0)]})}),128))],16),u(e.$slots,"end",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),e.labelPosition==="end"?u(e.$slots,"label",{key:1,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[d(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):m("",!0)],16,N)}G.render=A;export{G as default};
