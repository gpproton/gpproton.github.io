import{a7 as p,ad as r,a8 as c,a9 as b,o,c as s,a as u,ab as i,aa as f,U as h,ac as g,V as m,t as v}from"./BivQ4lp2.js";import{s as y}from"./4uy2ObqJ.js";var B={root:function(a){var n=a.instance,l=a.props;return["p-togglebutton p-component",{"p-disabled":l.disabled,"p-highlight":n.active,"p-invalid":l.invalid}]},input:"p-togglebutton-input",box:function(a){var n=a.instance;return["p-button p-component",{"p-button-icon-only":n.hasIcon&&!n.hasLabel}]},icon:function(a){var n=a.instance,l=a.props;return["p-button-icon",{"p-button-icon-left":l.iconPos==="left"&&n.label,"p-button-icon-right":l.iconPos==="right"&&n.label}]},label:"p-button-label"},S=p.extend({name:"togglebutton",classes:B}),I={name:"BaseToggleButton",extends:y,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}},L={name:"ToggleButton",extends:I,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){var n=a==="root"?this.ptmi:this.ptm;return n(a,{context:{active:this.active,disabled:this.disabled}})},onChange:function(a){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",a))},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return r.isNotEmpty(this.onLabel)&&r.isNotEmpty(this.offLabel)},hasIcon:function(){return this.$slots.icon||this.onIcon&&this.offIcon},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:c}},V=["data-p-highlight","data-p-disabled"],P=["id","value","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function O(e,a,n,l,T,t){var d=b("ripple");return o(),s("div",i({class:e.cx("root")},t.getPTOptions("root"),{"data-p-highlight":t.active,"data-p-disabled":e.disabled}),[u("input",i({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.modelValue,checked:t.active,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:a[1]||(a[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:a[2]||(a[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,P),f((o(),s("div",i({class:e.cx("box")},t.getPTOptions("box")),[h(e.$slots,"icon",{value:e.modelValue,class:m(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(o(),s("span",i({key:0,class:[e.cx("icon"),e.modelValue?e.onIcon:e.offIcon]},t.getPTOptions("icon")),null,16)):g("",!0)]}),u("span",i({class:e.cx("label")},t.getPTOptions("label")),v(t.label),17)],16)),[[d]])],16,V)}L.render=O;export{L as default};
