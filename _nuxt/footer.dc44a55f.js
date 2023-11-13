import{c as ro,b as ee,_ as A,d as U,g as Z,w as ve,e as ae,u as Ke,i as ue,j as ao}from"./base.9f8ca0ff.js";import{l as $,z as V,u as j,r as I,k as y,B as Se,M as te,o as m,H as L,w as C,N as io,a as x,x as O,y as r,J as Q,O as co,a1 as uo,c as z,b as R,F as ke,f as ne,D as de,m as le,n as po,A as he,C as fo,v as M,I as oe,K as G,S as mo,E as vo,au as ho,aq as K,av as go,aw as bo,G as Ve,a5 as _o,P as ce,g as Te,Q as pe,j as be,ax as wo,t as _e,ay as Pe,U as yo,V as Eo,d as we,W as Io}from"./entry.428a5e80.js";import{_ as Co}from"./nuxt-link.87ac4c8c.js";import{n as He,u as fe,i as So,q as me,o as ko,a1 as P,v as ie,C as Ge,E as q,ac as To,N as $o,U as ye,a6 as Ee,ae as Ie,w as No,x as Oo,m as Ro,af as Fo,T as Bo,ag as Po}from"./button.3432f37f.js";import{b as J,u as Lo,d as Le,a as zo,O as Ao,c as Ye,w as ze,F as Mo}from"./popper.c2a74fde.js";import{c as Do}from"./castArray.19664307.js";import{_ as Ko}from"./_plugin-vue_export-helper.c27b6911.js";const Vo=e=>["",...ro].includes(e),re=4,Ho={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Go=({move:e,size:t,bar:n})=>({[n.size]:t,transform:`translate${n.axis}(${e}%)`}),Ue=Symbol("scrollbarContextKey"),Yo=ee({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Uo="Thumb",Wo=$({__name:"thumb",props:Yo,setup(e){const t=e,n=V(Ue),o=j("scrollbar");n||He(Uo,"can not inject scrollbar context");const c=I(),u=I(),a=I({}),s=I(!1);let f=!1,E=!1,b=So?document.onselectstart:null;const d=y(()=>Ho[t.vertical?"vertical":"horizontal"]),S=y(()=>Go({size:t.size,move:t.move,bar:d.value})),p=y(()=>c.value[d.value.offset]**2/n.wrapElement[d.value.scrollSize]/t.ratio/u.value[d.value.offset]),_=h=>{var i;if(h.stopPropagation(),h.ctrlKey||[1,2].includes(h.button))return;(i=window.getSelection())==null||i.removeAllRanges(),T(h);const l=h.currentTarget;l&&(a.value[d.value.axis]=l[d.value.offset]-(h[d.value.client]-l.getBoundingClientRect()[d.value.direction]))},v=h=>{if(!u.value||!c.value||!n.wrapElement)return;const i=Math.abs(h.target.getBoundingClientRect()[d.value.direction]-h[d.value.client]),l=u.value[d.value.offset]/2,g=(i-l)*100*p.value/c.value[d.value.offset];n.wrapElement[d.value.scroll]=g*n.wrapElement[d.value.scrollSize]/100},T=h=>{h.stopImmediatePropagation(),f=!0,document.addEventListener("mousemove",D),document.addEventListener("mouseup",F),b=document.onselectstart,document.onselectstart=()=>!1},D=h=>{if(!c.value||!u.value||f===!1)return;const i=a.value[d.value.axis];if(!i)return;const l=(c.value.getBoundingClientRect()[d.value.direction]-h[d.value.client])*-1,g=u.value[d.value.offset]-i,H=(l-g)*100*p.value/c.value[d.value.offset];n.wrapElement[d.value.scroll]=H*n.wrapElement[d.value.scrollSize]/100},F=()=>{f=!1,a.value[d.value.axis]=0,document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",F),B(),E&&(s.value=!1)},k=()=>{E=!1,s.value=!!t.size},N=()=>{E=!0,s.value=f};Se(()=>{B(),document.removeEventListener("mouseup",F)});const B=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return fe(te(n,"scrollbarElement"),"mousemove",k),fe(te(n,"scrollbarElement"),"mouseleave",N),(h,i)=>(m(),L(uo,{name:r(o).b("fade"),persisted:""},{default:C(()=>[io(x("div",{ref_key:"instance",ref:c,class:O([r(o).e("bar"),r(o).is(r(d).key)]),onMousedown:v},[x("div",{ref_key:"thumb",ref:u,class:O(r(o).e("thumb")),style:Q(r(S)),onMousedown:_},null,38)],34),[[co,h.always||s.value]])]),_:1},8,["name"]))}});var Ae=A(Wo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Jo=ee({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),jo=$({__name:"bar",props:Jo,setup(e,{expose:t}){const n=e,o=I(0),c=I(0);return t({handleScroll:a=>{if(a){const s=a.offsetHeight-re,f=a.offsetWidth-re;c.value=a.scrollTop*100/s*n.ratioY,o.value=a.scrollLeft*100/f*n.ratioX}}}),(a,s)=>(m(),z(ke,null,[R(Ae,{move:o.value,ratio:a.ratioX,size:a.width,always:a.always},null,8,["move","ratio","size","always"]),R(Ae,{move:c.value,ratio:a.ratioY,size:a.height,vertical:"",always:a.always},null,8,["move","ratio","size","always"])],64))}});var Xo=A(jo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const qo=ee({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:U([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Qo={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(Z)},Zo="ElScrollbar",xo=$({name:Zo}),et=$({...xo,props:qo,emits:Qo,setup(e,{expose:t,emit:n}){const o=e,c=j("scrollbar");let u,a;const s=I(),f=I(),E=I(),b=I("0"),d=I("0"),S=I(),p=I(1),_=I(1),v=y(()=>{const i={};return o.height&&(i.height=me(o.height)),o.maxHeight&&(i.maxHeight=me(o.maxHeight)),[o.wrapStyle,i]}),T=y(()=>[o.wrapClass,c.e("wrap"),{[c.em("wrap","hidden-default")]:!o.native}]),D=y(()=>[c.e("view"),o.viewClass]),F=()=>{var i;f.value&&((i=S.value)==null||i.handleScroll(f.value),n("scroll",{scrollTop:f.value.scrollTop,scrollLeft:f.value.scrollLeft}))};function k(i,l){mo(i)?f.value.scrollTo(i):Z(i)&&Z(l)&&f.value.scrollTo(i,l)}const N=i=>{Z(i)&&(f.value.scrollTop=i)},B=i=>{Z(i)&&(f.value.scrollLeft=i)},h=()=>{if(!f.value)return;const i=f.value.offsetHeight-re,l=f.value.offsetWidth-re,g=i**2/f.value.scrollHeight,H=l**2/f.value.scrollWidth,Y=Math.max(g,o.minSize),X=Math.max(H,o.minSize);p.value=g/(i-g)/(Y/(i-Y)),_.value=H/(l-H)/(X/(l-X)),d.value=Y+re<i?`${Y}px`:"",b.value=X+re<l?`${X}px`:""};return ne(()=>o.noresize,i=>{i?(u==null||u(),a==null||a()):({stop:u}=ko(E,h),a=fe("resize",h))},{immediate:!0}),ne(()=>[o.maxHeight,o.height],()=>{o.native||de(()=>{var i;h(),f.value&&((i=S.value)==null||i.handleScroll(f.value))})}),le(Ue,po({scrollbarElement:s,wrapElement:f})),he(()=>{o.native||de(()=>{h()})}),fo(()=>h()),t({wrapRef:f,update:h,scrollTo:k,setScrollTop:N,setScrollLeft:B,handleScroll:F}),(i,l)=>(m(),z("div",{ref_key:"scrollbarRef",ref:s,class:O(r(c).b())},[x("div",{ref_key:"wrapRef",ref:f,class:O(r(T)),style:Q(r(v)),onScroll:F},[(m(),L(oe(i.tag),{id:i.id,ref_key:"resizeRef",ref:E,class:O(r(D)),style:Q(i.viewStyle),role:i.role,"aria-label":i.ariaLabel,"aria-orientation":i.ariaOrientation},{default:C(()=>[M(i.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),i.native?G("v-if",!0):(m(),L(Xo,{key:0,ref_key:"barRef",ref:S,height:d.value,width:b.value,always:i.always,"ratio-x":_.value,"ratio-y":p.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var ot=A(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const tt=ve(ot),nt=$({name:"ElContainer"}),lt=$({...nt,props:{direction:{type:String}},setup(e){const t=e,n=vo(),o=j("container"),c=y(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:n&&n.default?n.default().some(a=>{const s=a.type.name;return s==="ElHeader"||s==="ElFooter"}):!1);return(u,a)=>(m(),z("section",{class:O([r(o).b(),r(o).is("vertical",r(c))])},[M(u.$slots,"default")],2))}});var st=A(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const rt=$({name:"ElAside"}),at=$({...rt,props:{width:{type:String,default:null}},setup(e){const t=e,n=j("aside"),o=y(()=>t.width?n.cssVarBlock({width:t.width}):{});return(c,u)=>(m(),z("aside",{class:O(r(n).b()),style:Q(r(o))},[M(c.$slots,"default")],6))}});var We=A(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const it=$({name:"ElFooter"}),ct=$({...it,props:{height:{type:String,default:null}},setup(e){const t=e,n=j("footer"),o=y(()=>t.height?n.cssVarBlock({height:t.height}):{});return(c,u)=>(m(),z("footer",{class:O(r(n).b()),style:Q(r(o))},[M(c.$slots,"default")],6))}});var Je=A(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const ut=$({name:"ElHeader"}),dt=$({...ut,props:{height:{type:String,default:null}},setup(e){const t=e,n=j("header"),o=y(()=>t.height?n.cssVarBlock({height:t.height}):{});return(c,u)=>(m(),z("header",{class:O(r(n).b()),style:Q(r(o))},[M(c.$slots,"default")],6))}});var je=A(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const pt=$({name:"ElMain"}),ft=$({...pt,setup(e){const t=j("main");return(n,o)=>(m(),z("main",{class:O(r(t).b())},[M(n.$slots,"default")],2))}});var Xe=A(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Fn=ve(st,{Aside:We,Footer:Je,Header:je,Main:Xe}),Bn=ae(We),Pn=ae(Je),Ln=ae(je),zn=ae(Xe),mt=$({inheritAttrs:!1});function vt(e,t,n,o,c,u){return M(e.$slots,"default")}var ht=A(mt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const gt=$({name:"ElCollectionItem",inheritAttrs:!1});function bt(e,t,n,o,c,u){return M(e.$slots,"default")}var _t=A(gt,[["render",bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const qe="data-el-collection-item",Qe=e=>{const t=`El${e}Collection`,n=`${t}Item`,o=Symbol(t),c=Symbol(n),u={...ht,name:t,setup(){const s=I(null),f=new Map;le(o,{itemMap:f,getItems:()=>{const b=r(s);if(!b)return[];const d=Array.from(b.querySelectorAll(`[${qe}]`));return[...f.values()].sort((p,_)=>d.indexOf(p.ref)-d.indexOf(_.ref))},collectionRef:s})}},a={..._t,name:n,setup(s,{attrs:f}){const E=I(null),b=V(o,void 0);le(c,{collectionItemRef:E}),he(()=>{const d=r(E);d&&b.itemMap.set(d,{ref:d,...f})}),Se(()=>{const d=r(E);b.itemMap.delete(d)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:u,ElCollectionItem:a}},wt=ee({style:{type:U([String,Array,Object])},currentTabId:{type:U(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:U(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:yt,ElCollectionItem:Et,COLLECTION_INJECTION_KEY:$e,COLLECTION_ITEM_INJECTION_KEY:It}=Qe("RovingFocusGroup"),Ne=Symbol("elRovingFocusGroup"),Ze=Symbol("elRovingFocusGroupItem"),Ct={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},St=(e,t)=>{if(t!=="rtl")return e;switch(e){case P.right:return P.left;case P.left:return P.right;default:return e}},kt=(e,t,n)=>{const o=St(e.key,n);if(!(t==="vertical"&&[P.left,P.right].includes(o))&&!(t==="horizontal"&&[P.up,P.down].includes(o)))return Ct[o]},Tt=(e,t)=>e.map((n,o)=>e[(o+t)%e.length]),Oe=e=>{const{activeElement:t}=document;for(const n of e)if(n===t||(n.focus(),t!==document.activeElement))return},Me="currentTabIdChange",De="rovingFocusGroup.entryFocus",$t={bubbles:!1,cancelable:!0},Nt=$({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:wt,emits:[Me,"entryFocus"],setup(e,{emit:t}){var n;const o=I((n=e.currentTabId||e.defaultCurrentTabId)!=null?n:null),c=I(!1),u=I(!1),a=I(null),{getItems:s}=V($e,void 0),f=y(()=>[{outline:"none"},e.style]),E=v=>{t(Me,v)},b=()=>{c.value=!0},d=J(v=>{var T;(T=e.onMousedown)==null||T.call(e,v)},()=>{u.value=!0}),S=J(v=>{var T;(T=e.onFocus)==null||T.call(e,v)},v=>{const T=!r(u),{target:D,currentTarget:F}=v;if(D===F&&T&&!r(c)){const k=new Event(De,$t);if(F==null||F.dispatchEvent(k),!k.defaultPrevented){const N=s().filter(g=>g.focusable),B=N.find(g=>g.active),h=N.find(g=>g.id===r(o)),l=[B,h,...N].filter(Boolean).map(g=>g.ref);Oe(l)}}u.value=!1}),p=J(v=>{var T;(T=e.onBlur)==null||T.call(e,v)},()=>{c.value=!1}),_=(...v)=>{t("entryFocus",...v)};le(Ne,{currentTabbedId:ho(o),loop:te(e,"loop"),tabIndex:y(()=>r(c)?-1:0),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:f,orientation:te(e,"orientation"),dir:te(e,"dir"),onItemFocus:E,onItemShiftTab:b,onBlur:p,onFocus:S,onMousedown:d}),ne(()=>e.currentTabId,v=>{o.value=v??null}),fe(a,De,_)}});function Ot(e,t,n,o,c,u){return M(e.$slots,"default")}var Rt=A(Nt,[["render",Ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Ft=$({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:yt,ElRovingFocusGroupImpl:Rt}});function Bt(e,t,n,o,c,u){const a=K("el-roving-focus-group-impl"),s=K("el-focus-group-collection");return m(),L(s,null,{default:C(()=>[R(a,go(bo(e.$attrs)),{default:C(()=>[M(e.$slots,"default")]),_:3},16)]),_:3})}var Pt=A(Ft,[["render",Bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Lt=$({components:{ElRovingFocusCollectionItem:Et},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:n,loop:o,onItemFocus:c,onItemShiftTab:u}=V(Ne,void 0),{getItems:a}=V($e,void 0),s=Ve(),f=I(null),E=J(p=>{t("mousedown",p)},p=>{e.focusable?c(r(s)):p.preventDefault()}),b=J(p=>{t("focus",p)},()=>{c(r(s))}),d=J(p=>{t("keydown",p)},p=>{const{key:_,shiftKey:v,target:T,currentTarget:D}=p;if(_===P.tab&&v){u();return}if(T!==D)return;const F=kt(p);if(F){p.preventDefault();let N=a().filter(B=>B.focusable).map(B=>B.ref);switch(F){case"last":{N.reverse();break}case"prev":case"next":{F==="prev"&&N.reverse();const B=N.indexOf(D);N=o.value?Tt(N,B+1):N.slice(B+1);break}}de(()=>{Oe(N)})}}),S=y(()=>n.value===r(s));return le(Ze,{rovingFocusGroupItemRef:f,tabIndex:y(()=>r(S)?0:-1),handleMousedown:E,handleFocus:b,handleKeydown:d}),{id:s,handleKeydown:d,handleFocus:b,handleMousedown:E}}});function zt(e,t,n,o,c,u){const a=K("el-roving-focus-collection-item");return m(),L(a,{id:e.id,focusable:e.focusable,active:e.active},{default:C(()=>[M(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var At=A(Lt,[["render",zt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Mt=ee({trigger:Lo.trigger,effect:{...Le.effect,default:"light"},type:{type:U(String)},placement:{type:U(String),default:"bottom"},popperOptions:{type:U(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:U([Number,String]),default:0},maxHeight:{type:U([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:U(Object)},teleported:Le.teleported}),xe=ee({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ie}}),Dt=ee({onKeydown:{type:U(Function)}}),Kt=[P.down,P.pageDown,P.home],eo=[P.up,P.pageUp,P.end],Vt=[...Kt,...eo],{ElCollection:Ht,ElCollectionItem:Gt,COLLECTION_INJECTION_KEY:Yt,COLLECTION_ITEM_INJECTION_KEY:Ut}=Qe("Dropdown"),ge=Symbol("elDropdown"),{ButtonGroup:Wt}=Ge,Jt=$({name:"ElDropdown",components:{ElButton:Ge,ElButtonGroup:Wt,ElScrollbar:tt,ElDropdownCollection:Ht,ElTooltip:zo,ElRovingFocusGroup:Pt,ElOnlyChild:Ao,ElIcon:q,ArrowDown:To},props:Mt,emits:["visible-change","click","command"],setup(e,{emit:t}){const n=Te(),o=j("dropdown"),{t:c}=$o(),u=I(),a=I(),s=I(null),f=I(null),E=I(null),b=I(null),d=I(!1),S=[P.enter,P.space,P.down],p=y(()=>({maxHeight:me(e.maxHeight)})),_=y(()=>[o.m(B.value)]),v=y(()=>Do(e.trigger)),T=Ve().value,D=y(()=>e.id||T);ne([u,v],([w,W],[se])=>{var Re,Fe,Be;(Re=se==null?void 0:se.$el)!=null&&Re.removeEventListener&&se.$el.removeEventListener("pointerenter",i),(Fe=w==null?void 0:w.$el)!=null&&Fe.removeEventListener&&w.$el.removeEventListener("pointerenter",i),(Be=w==null?void 0:w.$el)!=null&&Be.addEventListener&&W.includes("hover")&&w.$el.addEventListener("pointerenter",i)},{immediate:!0}),Se(()=>{var w,W;(W=(w=u.value)==null?void 0:w.$el)!=null&&W.removeEventListener&&u.value.$el.removeEventListener("pointerenter",i)});function F(){k()}function k(){var w;(w=s.value)==null||w.onClose()}function N(){var w;(w=s.value)==null||w.onOpen()}const B=Ke();function h(...w){t("command",...w)}function i(){var w,W;(W=(w=u.value)==null?void 0:w.$el)==null||W.focus()}function l(){}function g(){const w=r(f);v.value.includes("hover")&&(w==null||w.focus()),b.value=null}function H(w){b.value=w}function Y(w){d.value||(w.preventDefault(),w.stopImmediatePropagation())}function X(){t("visible-change",!0)}function lo(w){(w==null?void 0:w.type)==="keydown"&&f.value.focus()}function so(){t("visible-change",!1)}return le(ge,{contentRef:f,role:y(()=>e.role),triggerId:D,isUsingKeyboard:d,onItemEnter:l,onItemLeave:g}),le("elDropdown",{instance:n,dropdownSize:B,handleClick:F,commandHandler:h,trigger:te(e,"trigger"),hideOnClick:te(e,"hideOnClick")}),{t:c,ns:o,scrollbar:E,wrapStyle:p,dropdownTriggerKls:_,dropdownSize:B,triggerId:D,triggerKeys:S,currentTabId:b,handleCurrentTabIdChange:H,handlerMainButtonClick:w=>{t("click",w)},handleEntryFocus:Y,handleClose:k,handleOpen:N,handleBeforeShowTooltip:X,handleShowTooltip:lo,handleBeforeHideTooltip:so,onFocusAfterTrapped:w=>{var W,se;w.preventDefault(),(se=(W=f.value)==null?void 0:W.focus)==null||se.call(W,{preventScroll:!0})},popperRef:s,contentRef:f,triggeringElementRef:u,referenceElementRef:a}}});function jt(e,t,n,o,c,u){var a;const s=K("el-dropdown-collection"),f=K("el-roving-focus-group"),E=K("el-scrollbar"),b=K("el-only-child"),d=K("el-tooltip"),S=K("el-button"),p=K("arrow-down"),_=K("el-icon"),v=K("el-button-group");return m(),z("div",{class:O([e.ns.b(),e.ns.is("disabled",e.disabled)])},[R(d,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(a=e.referenceElementRef)==null?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},_o({content:C(()=>[R(E,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:C(()=>[R(f,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:C(()=>[R(s,null,{default:C(()=>[M(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:C(()=>[R(b,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:C(()=>[M(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(m(),L(v,{key:0},{default:C(()=>[R(S,ce({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:C(()=>[M(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),R(S,ce({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:C(()=>[R(_,{class:O(e.ns.e("icon"))},{default:C(()=>[R(p)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):G("v-if",!0)],2)}var Xt=A(Jt,[["render",jt],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const qt=$({name:"DropdownItemImpl",components:{ElIcon:q},props:xe,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const n=j("dropdown"),{role:o}=V(ge,void 0),{collectionItemRef:c}=V(Ut,void 0),{collectionItemRef:u}=V(It,void 0),{rovingFocusGroupItemRef:a,tabIndex:s,handleFocus:f,handleKeydown:E,handleMousedown:b}=V(Ze,void 0),d=Ye(c,u,a),S=y(()=>o.value==="menu"?"menuitem":o.value==="navigation"?"link":"button"),p=J(_=>{const{code:v}=_;if(v===P.enter||v===P.space)return _.preventDefault(),_.stopImmediatePropagation(),t("clickimpl",_),!0},E);return{ns:n,itemRef:d,dataset:{[qe]:""},role:S,tabIndex:s,handleFocus:f,handleKeydown:p,handleMousedown:b}}}),Qt=["aria-disabled","tabindex","role"];function Zt(e,t,n,o,c,u){const a=K("el-icon");return m(),z(ke,null,[e.divided?(m(),z("li",ce({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):G("v-if",!0),x("li",ce({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:t[0]||(t[0]=s=>e.$emit("clickimpl",s)),onFocus:t[1]||(t[1]=(...s)=>e.handleFocus&&e.handleFocus(...s)),onKeydown:t[2]||(t[2]=pe((...s)=>e.handleKeydown&&e.handleKeydown(...s),["self"])),onMousedown:t[3]||(t[3]=(...s)=>e.handleMousedown&&e.handleMousedown(...s)),onPointermove:t[4]||(t[4]=s=>e.$emit("pointermove",s)),onPointerleave:t[5]||(t[5]=s=>e.$emit("pointerleave",s))}),[e.icon?(m(),L(a,{key:0},{default:C(()=>[(m(),L(oe(e.icon)))]),_:1})):G("v-if",!0),M(e.$slots,"default")],16,Qt)],64)}var xt=A(qt,[["render",Zt],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const oo=()=>{const e=V("elDropdown",{}),t=y(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},en=$({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Gt,ElRovingFocusItem:At,ElDropdownItemImpl:xt},inheritAttrs:!1,props:xe,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:n}){const{elDropdown:o}=oo(),c=Te(),u=I(null),a=y(()=>{var p,_;return(_=(p=r(u))==null?void 0:p.textContent)!=null?_:""}),{onItemEnter:s,onItemLeave:f}=V(ge,void 0),E=J(p=>(t("pointermove",p),p.defaultPrevented),ze(p=>{if(e.disabled){f(p);return}const _=p.currentTarget;_===document.activeElement||_.contains(document.activeElement)||(s(p),p.defaultPrevented||_==null||_.focus())})),b=J(p=>(t("pointerleave",p),p.defaultPrevented),ze(p=>{f(p)})),d=J(p=>{if(!e.disabled)return t("click",p),p.type!=="keydown"&&p.defaultPrevented},p=>{var _,v,T;if(e.disabled){p.stopImmediatePropagation();return}(_=o==null?void 0:o.hideOnClick)!=null&&_.value&&((v=o.handleClick)==null||v.call(o)),(T=o.commandHandler)==null||T.call(o,e.command,c,p)}),S=y(()=>({...e,...n}));return{handleClick:d,handlePointerMove:E,handlePointerLeave:b,textContent:a,propsAndAttrs:S}}});function on(e,t,n,o,c,u){var a;const s=K("el-dropdown-item-impl"),f=K("el-roving-focus-item"),E=K("el-dropdown-collection-item");return m(),L(E,{disabled:e.disabled,"text-value":(a=e.textValue)!=null?a:e.textContent},{default:C(()=>[R(f,{focusable:!e.disabled},{default:C(()=>[R(s,ce(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:C(()=>[M(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var to=A(en,[["render",on],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const tn=$({name:"ElDropdownMenu",props:Dt,setup(e){const t=j("dropdown"),{_elDropdownSize:n}=oo(),o=n.value,{focusTrapRef:c,onKeydown:u}=V(Mo,void 0),{contentRef:a,role:s,triggerId:f}=V(ge,void 0),{collectionRef:E,getItems:b}=V(Yt,void 0),{rovingFocusGroupRef:d,rovingFocusGroupRootStyle:S,tabIndex:p,onBlur:_,onFocus:v,onMousedown:T}=V(Ne,void 0),{collectionRef:D}=V($e,void 0),F=y(()=>[t.b("menu"),t.bm("menu",o==null?void 0:o.value)]),k=Ye(a,E,c,d,D),N=J(h=>{var i;(i=e.onKeydown)==null||i.call(e,h)},h=>{const{currentTarget:i,code:l,target:g}=h;if(i.contains(g),P.tab===l&&h.stopImmediatePropagation(),h.preventDefault(),g!==r(a)||!Vt.includes(l))return;const Y=b().filter(X=>!X.disabled).map(X=>X.ref);eo.includes(l)&&Y.reverse(),Oe(Y)});return{size:o,rovingFocusGroupRootStyle:S,tabIndex:p,dropdownKls:F,role:s,triggerId:f,dropdownListWrapperRef:k,handleKeydown:h=>{N(h),u(h)},onBlur:_,onFocus:v,onMousedown:T}}}),nn=["role","aria-labelledby"];function ln(e,t,n,o,c,u){return m(),z("ul",{ref:e.dropdownListWrapperRef,class:O(e.dropdownKls),style:Q(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...a)=>e.onBlur&&e.onBlur(...a)),onFocus:t[1]||(t[1]=(...a)=>e.onFocus&&e.onFocus(...a)),onKeydown:t[2]||(t[2]=pe((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:t[3]||(t[3]=pe((...a)=>e.onMousedown&&e.onMousedown(...a),["self"]))},[M(e.$slots,"default")],46,nn)}var no=A(tn,[["render",ln],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const sn=ve(Xt,{DropdownItem:to,DropdownMenu:no}),rn=ae(to),an=ae(no),cn=ee({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Vo},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:ie},activeActionIcon:{type:ie},activeIcon:{type:ie},inactiveIcon:{type:ie},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:U(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),un={[ye]:e=>ue(e)||be(e)||Z(e),[Ee]:e=>ue(e)||be(e)||Z(e),[Ie]:e=>ue(e)||be(e)||Z(e)},dn=["onClick"],pn=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],fn=["aria-hidden"],mn=["aria-hidden"],vn=["aria-hidden"],Ce="ElSwitch",hn=$({name:Ce}),gn=$({...hn,props:cn,emits:un,setup(e,{expose:t,emit:n}){const o=e,c=Te(),{formItem:u}=No(),a=Ke(),s=j("switch");(l=>{l.forEach(g=>{Bo({from:g[0],replacement:g[1],scope:Ce,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},y(()=>{var H;return!!((H=c.vnode.props)!=null&&H[g[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:E}=Oo(o,{formItemContext:u}),b=ao(y(()=>o.loading)),d=I(o.modelValue!==!1),S=I(),p=I(),_=y(()=>[s.b(),s.m(a.value),s.is("disabled",b.value),s.is("checked",k.value)]),v=y(()=>[s.e("label"),s.em("label","left"),s.is("active",!k.value)]),T=y(()=>[s.e("label"),s.em("label","right"),s.is("active",k.value)]),D=y(()=>({width:me(o.width)}));ne(()=>o.modelValue,()=>{d.value=!0}),ne(()=>o.value,()=>{d.value=!1});const F=y(()=>d.value?o.modelValue:o.value),k=y(()=>F.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(F.value)||(n(ye,o.inactiveValue),n(Ee,o.inactiveValue),n(Ie,o.inactiveValue)),ne(k,l=>{var g;S.value.checked=l,o.validateEvent&&((g=u==null?void 0:u.validate)==null||g.call(u,"change").catch(H=>Ro()))});const N=()=>{const l=k.value?o.inactiveValue:o.activeValue;n(ye,l),n(Ee,l),n(Ie,l),de(()=>{S.value.checked=k.value})},B=()=>{if(b.value)return;const{beforeChange:l}=o;if(!l){N();return}const g=l();[Pe(g),ue(g)].includes(!0)||He(Ce,"beforeChange must return type `Promise<boolean>` or `boolean`"),Pe(g)?g.then(Y=>{Y&&N()}).catch(Y=>{}):g&&N()},h=y(()=>s.cssVarBlock({...o.activeColor?{"on-color":o.activeColor}:null,...o.inactiveColor?{"off-color":o.inactiveColor}:null,...o.borderColor?{"border-color":o.borderColor}:null})),i=()=>{var l,g;(g=(l=S.value)==null?void 0:l.focus)==null||g.call(l)};return he(()=>{S.value.checked=k.value}),t({focus:i,checked:k}),(l,g)=>(m(),z("div",{class:O(r(_)),style:Q(r(h)),onClick:pe(B,["prevent"])},[x("input",{id:r(E),ref_key:"input",ref:S,class:O(r(s).e("input")),type:"checkbox",role:"switch","aria-checked":r(k),"aria-disabled":r(b),"aria-label":l.label,name:l.name,"true-value":l.activeValue,"false-value":l.inactiveValue,disabled:r(b),tabindex:l.tabindex,onChange:N,onKeydown:wo(B,["enter"])},null,42,pn),!l.inlinePrompt&&(l.inactiveIcon||l.inactiveText)?(m(),z("span",{key:0,class:O(r(v))},[l.inactiveIcon?(m(),L(r(q),{key:0},{default:C(()=>[(m(),L(oe(l.inactiveIcon)))]),_:1})):G("v-if",!0),!l.inactiveIcon&&l.inactiveText?(m(),z("span",{key:1,"aria-hidden":r(k)},_e(l.inactiveText),9,fn)):G("v-if",!0)],2)):G("v-if",!0),x("span",{ref_key:"core",ref:p,class:O(r(s).e("core")),style:Q(r(D))},[l.inlinePrompt?(m(),z("div",{key:0,class:O(r(s).e("inner"))},[l.activeIcon||l.inactiveIcon?(m(),L(r(q),{key:0,class:O(r(s).is("icon"))},{default:C(()=>[(m(),L(oe(r(k)?l.activeIcon:l.inactiveIcon)))]),_:1},8,["class"])):l.activeText||l.inactiveText?(m(),z("span",{key:1,class:O(r(s).is("text")),"aria-hidden":!r(k)},_e(r(k)?l.activeText:l.inactiveText),11,mn)):G("v-if",!0)],2)):G("v-if",!0),x("div",{class:O(r(s).e("action"))},[l.loading?(m(),L(r(q),{key:0,class:O(r(s).is("loading"))},{default:C(()=>[R(r(Fo))]),_:1},8,["class"])):l.activeActionIcon&&r(k)?(m(),L(r(q),{key:1},{default:C(()=>[(m(),L(oe(l.activeActionIcon)))]),_:1})):l.inactiveActionIcon&&!r(k)?(m(),L(r(q),{key:2},{default:C(()=>[(m(),L(oe(l.inactiveActionIcon)))]),_:1})):G("v-if",!0)],2)],6),!l.inlinePrompt&&(l.activeIcon||l.activeText)?(m(),z("span",{key:1,class:O(r(T))},[l.activeIcon?(m(),L(r(q),{key:0},{default:C(()=>[(m(),L(oe(l.activeIcon)))]),_:1})):G("v-if",!0),!l.activeIcon&&l.activeText?(m(),z("span",{key:1,"aria-hidden":!r(k)},_e(l.activeText),9,vn)):G("v-if",!0)],2)):G("v-if",!0)],14,dn))}});var bn=A(gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const _n=ve(bn);const wn=(e="dark")=>{const t=I(),n=()=>{var c,u;const o=t.value==="light"?"dark":"light";(c=document.documentElement.classList)==null||c.remove(t.value),(u=document.documentElement.classList)==null||u.add(o),t.value=o,localStorage.setItem("theme",o)};return he(()=>{t.value=localStorage.getItem("theme")||e,document.documentElement.classList.add(t.value||e)}),{theme:t,setTheme:n}},yn={class:"el-dropdown-link"},En=$({__name:"AppHeader",setup(e){const t=yo(),n=Eo(),{theme:o,setTheme:c}=wn(),u=y({get(){return o.value==="light"},set(){c()}}),a=()=>{t.logout(),n.push({name:"auth"})},s=f=>{switch(f){case"basket":n.push({name:"basket"});break;case"logout":a();break}};return(f,E)=>{const b=Co,d=_n,S=q,p=rn,_=an,v=sn;return m(),z(ke,null,[R(b,{class:"logo__name",to:"/"},{default:C(()=>[we(" Shop ")]),_:1}),R(d,{modelValue:r(u),"onUpdate:modelValue":E[0]||(E[0]=T=>Io(u)?u.value=T:null),size:"large","active-text":"Light","inactive-text":"Dark"},null,8,["modelValue"]),R(v,{onCommand:s},{dropdown:C(()=>[R(_,null,{default:C(()=>[R(p,{command:"basket"},{default:C(()=>[we("Корзина")]),_:1},8,["command"]),R(p,{command:"logout"},{default:C(()=>[we("Выйти из аккаунта")]),_:1},8,["command"])]),_:1})]),default:C(()=>[x("span",yn,[R(S,null,{default:C(()=>[R(r(Po))]),_:1})])]),_:1})],64)}}});const An=Ko(En,[["__scopeId","data-v-8cc1d889"]]);export{Fn as E,An as _,Ln as a,zn as b,Bn as c,Pn as d};