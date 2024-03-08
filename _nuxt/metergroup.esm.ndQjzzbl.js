import{s as v}from"./basecomponent.esm.OrnFlqM1.js";import{a9 as z,o as n,c as o,al as g,am as h,ad as i,R as k,X as u,b,ae as c,a as f,Y as y,t as d}from"./entry.DhSr-ZNL.js";var S={root:function(t){var r=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":r.orientation==="horizontal","p-metergroup-vertical":r.orientation==="vertical"}]},metercontainer:"p-metergroup-meters",meter:"p-metergroup-meter",labellist:function(t){var r=t.props;return["p-metergroup-labels",{"p-metergroup-labels-vertical":r.labelOrientation==="vertical","p-metergroup-labels-horizontal":r.labelOrientation==="horizontal"}]},labellistitem:"p-metergroup-label",labelicon:"p-metergroup-label-icon",labellisttype:"p-metergroup-label-marker",label:"p-metergroup-label-text"},M=z.extend({name:"metergroup",classes:S}),V={name:"MeterGroup",extends:v,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:M,provide:function(){return{$parentInstance:this}}},P={name:"MeterGroupLabel",hostName:"MeterGroup",extends:v,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function G(e,t,r,p,O,a){return n(),o("ol",i({class:e.cx("labellist")},e.ptm("labellist")),[(n(!0),o(g,null,h(r.value,function(l,s){return n(),o("li",i({key:s+"_label",class:e.cx("labellistitem")},e.ptm("labellistitem")),[u(e.$slots,"icon",{value:l,class:y(e.cx("labelicon"))},function(){return[l.icon?(n(),o("i",i({key:0,class:[l.icon,e.cx("labelicon")],style:{color:l.color}},e.ptm("labelicon")),null,16)):(n(),o("span",i({key:1,class:e.cx("labellisttype"),style:{backgroundColor:l.color}},e.ptm("labellisttype")),null,16))]}),f("span",i({class:e.cx("label")},e.ptm("label")),d(l.label)+" ("+d(e.$parentInstance.percentValue(l.value))+")",17)],16)}),128))],16)}P.render=G;var N={name:"MeterGroup",extends:V,inheritAttrs:!1,methods:{getPTOptions:function(t,r,p){return this.ptm(t,{context:{value:r,index:p}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))},percentValue:function(t){return this.percent(t)+"%"},meterSize:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(t,r){return t+r.value},0))},percentages:function(){var t=0,r=[];return this.value.forEach(function(p){t+=p.value,r.push(t)}),r}},components:{MeterGroupLabel:P}},A=["aria-valuemin","aria-valuemax","aria-valuenow"];function C(e,t,r,p,O,a){var l=k("MeterGroupLabel");return n(),o("div",i({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a.totalPercent},e.ptmi("root")),[e.labelPosition==="start"?u(e.$slots,"label",{key:0,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[b(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):c("",!0),u(e.$slots,"start",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),f("div",i({class:e.cx("metercontainer")},e.ptm("metercontainer")),[(n(!0),o(g,null,h(e.value,function(s,m){return u(e.$slots,"meter",{key:m,value:s,index:m,class:y(e.cx("meter")),orientation:e.orientation,size:a.percentValue(s.value),totalPercent:a.totalPercent},function(){return[a.percent(s.value)?(n(),o("span",i({key:0,class:e.cx("meter"),style:a.meterSize(s)},a.getPTOptions("meter",s,m)),null,16)):c("",!0)]})}),128))],16),u(e.$slots,"end",{value:e.value,totalPercent:a.totalPercent,percentages:a.percentages}),e.labelPosition==="end"?u(e.$slots,"label",{key:1,value:e.value,totalPercent:a.totalPercent,percentages:a.percentages},function(){return[b(l,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):c("",!0)],16,A)}N.render=C;export{N as default};
