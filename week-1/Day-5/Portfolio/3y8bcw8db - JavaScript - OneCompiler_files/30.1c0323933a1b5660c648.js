(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"+JwS":function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),l=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.disableSpacing,l=void 0!==a&&a,s=e.classes,c=e.className,u=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(o.a)(s.root,c,!l&&s.spacing),ref:t},u))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},"0Mov":function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");t.default=o},"1waj":function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},AUy9:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=o},MPUk:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},ZuSV:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=o},anHE:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}),"FullscreenExit");t.default=o},de8u:function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),l=a("NqtD"),s=a("H2TA"),c=a("ye/S"),u=a("tr08"),d=r.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.color,d=void 0===c?"primary":c,p=e.value,f=e.valueBuffer,g=e.variant,b=void 0===g?"indeterminate":g,h=Object(i.a)(e,["classes","className","color","value","valueBuffer","variant"]),m=Object(u.a)(),v={},O={bar1:{},bar2:{}};if("determinate"===b||"buffer"===b)if(void 0!==p){v["aria-valuenow"]=Math.round(p),v["aria-valuemin"]=0,v["aria-valuemax"]=100;var j=p-100;"rtl"===m.direction&&(j=-j),O.bar1.transform="translateX(".concat(j,"%)")}else 0;if("buffer"===b)if(void 0!==f){var y=(f||0)-100;"rtl"===m.direction&&(y=-y),O.bar2.transform="translateX(".concat(y,"%)")}else 0;return r.createElement("div",Object(n.a)({className:Object(o.a)(a.root,a["color".concat(Object(l.a)(d))],s,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[b]),role:"progressbar"},v,{ref:t},h),"buffer"===b?r.createElement("div",{className:Object(o.a)(a.dashed,a["dashedColor".concat(Object(l.a)(d))])}):null,r.createElement("div",{className:Object(o.a)(a.bar,a["barColor".concat(Object(l.a)(d))],("indeterminate"===b||"query"===b)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[b]),style:O.bar1}),"determinate"===b?null:r.createElement("div",{className:Object(o.a)(a.bar,("indeterminate"===b||"query"===b)&&a.bar2Indeterminate,"buffer"===b?[a["color".concat(Object(l.a)(d))],a.bar2Buffer]:a["barColor".concat(Object(l.a)(d))]),style:O.bar2}))}));t.a=Object(s.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(c.e)(t,.62):Object(c.a)(t,.5)},a=t(e.palette.primary.main),n=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(d)},jOUs:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.default=o},nbUZ:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("ADg1"),o=a("1AYd"),l=a("cVXz"),s=i.a.createElement;t.a=function(e){var t="Public (Everyone)",a="Private (Only You)",n="Unlisted (People with the Link)";return e.channelType&&"org"===e.channelType&&(t="Public (Visible outside of org)",a="Private (Visible only for org members)",n="Unlisted (People outside org with the link)"),e.channelType&&"team"===e.channelType&&(t="Public (Visible outside of team)",a="Private (Visible only for team members)",n="Unlisted (People outside team with the link)"),s(r.a,{variant:"outlined",style:{minWidth:"200"}},s(o.a,{htmlFor:"visibility-selector"},"Visibility"),s(l.a,{native:!0,value:e.value,onChange:function(t){e.onChange(t.target.value)},label:"Visibility",inputProps:{name:"visibility",id:"visibility-selector"}},s("option",{value:"public"},t),s("option",{value:"private"},a),!e.channelType&&s("option",{value:"unlisted"},n)))}},oT12:function(e,t,a){"use strict";a.r(t);var n=a("z7pX"),i=a("vJKn"),r=a.n(i),o=a("rg98"),l=a("H+61"),s=a("UlJF"),c=a("+Css"),u=a("7LId"),d=a("VIvw"),p=a("iHvq"),f=a("cpVT"),g=a("HALo"),b=a("6u8J"),h=a("hlFM"),m=a("dfam"),v=a("PsDL"),O=a("gd/W"),j=a("jjAL"),y=a("ofer"),w=a("Bf0q"),C=a("csfp"),x=a("Z3vd"),k=a("1NhI"),S=a("tRbT"),T=a("kKAo"),I=a("KmP9"),N=a("wb2y"),F=a("r9w1"),M=a("de8u"),P=a("kfFl"),U=a("yv+Y"),E=a("EQI2"),R=a("+JwS"),L=a("H2TA"),z=a("1waj"),A=a.n(z),B=a("MPUk"),D=a.n(B),q=a("jOUs"),_=a.n(q),V=a("anHE"),H=a.n(V),W=a("AUy9"),J=a.n(W),$=a("ZuSV"),K=a.n($),Z=a("xSPK"),G=a.n(Z),Y=a("begR"),X=a("JG90"),Q=a.n(X),ee=a("a6RD"),te=a.n(ee),ae=a("q1tI"),ne=a.n(ae),ie=a("/MKj"),re=a("erk0"),oe=a("udWi");var le={createNewFileAndContent:function(e,t){var a=t.name;if(t.content,!t.name.includes("${i}"))return e.some((function(e){return e.name===a}))?(alert("".concat(a," is already added")),null):{name:t.name,content:t.content};for(var n=1,i=function(t){return n=t,e.some((function(e){return e.name===a.replace(/\${i}/g,t)}))?"continue":"break"},r=1;r<=20;r++){var o=i(r);if("continue"!==o&&"break"===o)break}return{name:t.name.replace(/\${i}/g,n),content:t.content.replace(/\${i}/g,n)}},updateFileNamesAndContent:function(e,t){if(e&&e.length>0&&"java"===t){var a=/class(\s+)([a-zA-Z0-9]+)\s*{/.exec(e[0].content);if(a&&a.length>0){var n=a[2];if(n!==e[0].name){e[0].name="".concat(n,".java");var i=e.filter((function(e){return"build.gradle"===e.name}));if(i&&1===i.length){var r=i[0];r.content=r.content.replace(/mainClassName = .*/,"mainClassName = '".concat(n,"'"))}}}}},canHaveNewFiles:function(e){var t=!1;return e&&e.properties&&e.properties.language&&re[e.properties.language]&&re[e.properties.language].properties.newFileOptions&&re[e.properties.language].properties.newFileOptions.length>0&&(t=!0),t}},se=a("dhJC"),ce=a("JrkS"),ue=a("ZPUd"),de=a.n(ue),pe=ne.a.createElement;var fe=Object(L.a)((function(e){return{root:{textTransform:"none","&:hover":{color:e.palette.primary.main,opacity:1,"& $closeIcon":{visibility:"visible"}}},closeIcon:{visibility:"hidden"}}}))((function(e){var t=e.classes,a=e.handleEdit,n=e.handleDelete,i=Object(se.a)(e,["classes","handleEdit","handleDelete"]);return pe(ce.a,Object(g.a)({},i,{className:t.root,component:"div",label:pe("span",null,e.label,pe("span",{className:t.closeIcon},a&&pe(C.a,{title:"Rename",placement:"top"},pe(v.a,{onClick:function(e){e.stopPropagation(),a&&a()},size:"small",style:{marginLeft:3}},pe(D.a,{fontSize:"small"}))),n&&pe(C.a,{title:"Delete",placement:"top"},pe(v.a,{onClick:function(e){e.stopPropagation(),n&&n()},size:"small",style:{marginLeft:3}},pe(de.a,{fontSize:"small"})))))}))})),ge=a("nbUZ"),be=a("MjS+"),he=a("tnzV"),me=a("bSwy"),ve=a.n(me),Oe=a("0Mov"),je=a.n(Oe),ye=ne.a.createElement;function we(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}var Ce=ne.a.forwardRef((function(e,t){return ye(b.a,Object(g.a)({direction:"down",ref:t},e))})),xe=function(e){Object(u.a)(a,e);var t=we(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(f.a)(Object(c.a)(e),"state",{value:0,searchString:""}),Object(f.a)(Object(c.a)(e),"handleChange",(function(t,a){e.setState({value:a})})),Object(f.a)(Object(c.a)(e),"handleClose",(function(){e.props.onClose()})),Object(f.a)(Object(c.a)(e),"languageOptionsByType",(function(t,a){var n="";return e.state.searchString&&(n=Object.keys(re).filter((function(t){return t.toLowerCase().includes(e.state.searchString.toLowerCase())}))),(n||Object.keys(re)).filter((function(e){return re[e].active})).filter((function(e){return re[e].languageType===t})).filter((function(e){return!a||!!a.includes(e)}))})),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props,n=(a.onClose,a.selectedValue,Object(se.a)(a,["onClose","selectedValue"]),this.state.value),i=[];this.props.availableLanguages?this.props.availableLanguages.length:Object.values(re).filter((function(e){return e.active})).length;return["Programming","Web","Database","Tool"].map((function(t){i.push({languageType:t,languageTitle:"Tool"===t?"Tools":"".concat(t," languages"),languagesAvailable:e.languageOptionsByType(t.toLowerCase(),e.props.availableLanguages)})})),ye(P.a,{fullWidth:!0,maxWidth:"md",onClose:this.handleClose,TransitionComponent:Ce,open:this.props.open},0===n&&ye(ne.a.Fragment,null,ye(S.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"flex-start"},ye(S.a,{item:!0,xs:12,md:4},ye(T.a,{className:"".concat(t.paper," oc-card"),elevation:0},ye(be.a,{size:"small",onChange:function(t){return e.setState({searchString:t.target.value})},value:this.state.searchString,className:t.input,placeholder:"Search languages...",inputProps:{"aria-label":"Search languages"}}),this.state.searchString?ye(v.a,{className:t.iconButton,"aria-label":"search",onClick:function(t){return e.setState({searchString:""})}},ye(de.a,null)):ye(v.a,{className:t.iconButton,"aria-label":"search"},ye(ve.a,null))))),ye(S.a,{container:!0,style:{paddingLeft:20,paddingRight:20}},i.map((function(a){return ye(S.a,{item:!0,container:!0,direction:"row",key:a.languageType},0!=a.languagesAvailable.length&&ye("div",{style:{width:"100%"}},ye(y.a,{variant:"h6",component:"h1",gutterBottom:!0,color:"secondary"}," ",a.languageTitle," "),ye(N.a,null),ye(S.a,{container:!0},a.languagesAvailable.map((function(a){var n=re[a];return n.properties&&n.properties.url?ye(S.a,{item:!0,sm:6,md:3,lg:3,key:a,className:t.selectionOptions},ye("a",{href:n.properties.url,target:"_blank"},ye(y.a,{variant:"subtitle1",component:"h2"},ye("div",{className:t.titleWithLink},n.name,ye(je.a,null))))):ye(S.a,{item:!0,sm:6,md:3,lg:3,key:a,className:t.selectionOptions,onClick:function(t){return e.props.handleListItemClick(a)}},ye("a",null,ye(y.a,{variant:"subtitle1",component:"h2"},n.name)))}))),ye("br",null)))})))))}}]),a}(ne.a.Component),ke=Object(L.a)((function(e){return{root:{flexGrow:1},selectionOptions:{cursor:"pointer",padding:5,borderRadius:5,"&:hover":{backgroundColor:"#ddd"}},paper:{marginRight:e.spacing(4),display:"flex",alignItems:"center",marginTop:e.spacing(2),marginBottom:0},input:{marginLeft:e.spacing(3),flex:1},iconButton:{padding:10},titleWithLink:{display:"flex"}}}))(Object(he.a)()(xe)),Se=a("KTi8"),Te=a("Qetd"),Ie=a.n(Te),Ne=function(){return(Ne=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Fe=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,i=e.display,r=e.height,o=e.width,l=e.overflow,s=e.styles,c=e.onLoad,u=e.onMouseOver,d=e.onMouseOut,p=e.scrolling,f=e.id,g=e.frameBorder,b=e.ariaHidden,h=e.sandbox,m=e.allow,v=e.className,O=e.title,j=e.ariaLabel,y=e.ariaLabelledby,w=e.name,C=e.target,x=e.loading,k=e.importance,S=e.referrerpolicy,T=e.allowpaymentrequest,I=e.src,N=Ie()({src:I||t,target:C||null,style:{position:n||null,display:i||"block",overflow:l||null},scrolling:p||null,allowpaymentrequest:T||null,importance:k||null,sandbox:h||null,loading:x||null,styles:s||null,name:w||null,className:v||null,referrerpolicy:S||null,title:O||null,allow:m||null,id:f||null,"aria-labelledby":y||null,"aria-hidden":b||null,"aria-label":j||null,width:o||null,height:r||null,onLoad:c||null,onMouseOver:u||null,onMouseOut:d||null}),F=Object.create(null),M=0,P=Object.keys(N);M<P.length;M++){var U=P[M];null!=N[U]&&(F[U]=N[U])}for(var E=0,R=Object.keys(F.style);E<R.length;E++){var L=R[E];null==F.style[L]&&delete F.style[L]}if(a)if("allow"in F){var z=F.allow.replace("fullscreen","");F.allow=("fullscreen "+z.trim()).trim()}else F.allow="fullscreen";return g>=0&&(F.style.hasOwnProperty("border")||(F.style.border=g)),ne.a.createElement("iframe",Ne({},F))},Me=ne.a.createElement;function Pe(e){e.codeObj._id||e.codeObj.properties.language;return Me(ne.a.Fragment,null,e.running&&Me("pre",{style:{padding:20}},"running..."),null===e.output&&Me("pre",{style:{padding:20}},"Click on RUN button to see the output"),!e.running&&!e.success&&e.output&&Me("pre",{style:{padding:20}},e.output),!e.running&&e.success&&e.output&&Me(ne.a.Fragment,null,Me(Fe,{url:"https://app.onecompiler.com/".concat(e.output,"/"),loading:"loading...",width:"100%",height:"100%",id:"ResultBrowserIframe",className:"myClassname",display:"initial",frameBorder:0,position:"relative",sandbox:"allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts",onLoad:function(){}})))}var Ue=ne.a.createElement;function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}function ze(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return Ae(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ae(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw r}}}}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var Be=te()((function(){return Promise.all([a.e(22),a.e(21),a.e(73)]).then(a.bind(null,"r42j"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["r42j"]},modules:["../components/OneEditor"]}}),De=ne.a.forwardRef((function(e,t){return Ue(b.a,Object(g.a)({direction:"down",ref:t},e))})),qe=function(e){var t=e.properties.language;if(t){var a=5e5;"web"===re[t].languageType&&(a=2e6);var n,i=0,r=ze(e.properties.files);try{for(r.s();!(n=r.n()).done;){i+=n.value.content.length}}catch(o){r.e(o)}finally{r.f()}return i>a?{status:"failed",message:"code is too long"}:{status:"success",message:""}}return{status:"failed",message:"Invalid language ".concat(t)}},_e=function(e){Object(u.a)(a,e);var t=Le(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e),Object(f.a)(Object(c.a)(n),"createCodeId",(function(){n.state.creatingCodeId||n.setState({creatingCodeId:!0,codeObj:Re(Re({},n.state.codeObj),{},{_id:null,title:"forking...",user:null})},(function(){fetch("/api/getIdAndToken").then((function(e){return e.json()})).then((function(e){var t=e.id,a=e.token,i=Re(Re({},n.state.codeObj),{},{_id:t,title:t});n.props.loggedInUserObj&&n.props.loggedInUserObj._id?i.user={_id:n.props.loggedInUserObj._id}:i.idToken=a,n.setState({creatingCodeId:!1,codeObj:i,output:null},(function(){n.props.handleCodeUpdate&&n.props.handleCodeUpdate(n.state.codeObj)}))}))}))})),Object(f.a)(Object(c.a)(n),"handleOnRunClick",function(){var e=Object(o.a)(r.a.mark((function e(t,a){var i,o,l,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.running){e.next=2;break}return e.abrupt("return");case 2:void 0===t&&(t=n.isOwnCode()),e.next=6;break;case 6:if(n.props.handleCodeUpdate&&n.props.handleCodeUpdate(n.state.codeObj),n.setState({output:"executing...",running:!0,success:null}),i=qe(n.state.codeObj),o=null,"failed"!==i.status){e.next=14;break}o={stdout:null,stderr:i.message},e.next=20;break;case 14:return e.next=16,fetch("/api/code/exec",{method:"POST",body:JSON.stringify(Re(Re({},n.state.codeObj),{},{visibility:n.props.visibility||n.state.codeObj.visibility||"public"})),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.props.token||a)}});case 16:return l=e.sent,e.next=19,l.json();case 19:o=e.sent;case 20:s=!0,c=o.stdout||"",(o.exception||o.stderr)&&(s=!1,c&&(c+="\n"),c=(c+=o.stderr||o.exception).trim()),c||(c="Your program did not output anything!"),n.setState({success:s,output:c,running:!1,codeObj:Re(Re({},n.state.codeObj),{},{visibility:o.newVisibility||n.state.codeObj.visibility||"public",properties:Re(Re({},n.state.codeObj.properties),{},{result:{success:s,output:c}})})},(function(){n.props.handleRunComplete&&n.props.handleRunComplete(n.state.codeObj)}));case 25:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(f.a)(Object(c.a)(n),"updateLanguage",(function(e){n.setState({codeTabIndex:0,codeObj:Re(Re({},JSON.parse(JSON.stringify(re[e]))),{},{visibility:n.props.visibility||n.state.codeObj.visibility||"public"})},(function(){n.props.handleNewCodeClick&&n.props.handleNewCodeClick(e)}))})),Object(f.a)(Object(c.a)(n),"toggleEditingModel",(function(){n.setState({editingModelOpen:!n.state.editingModelOpen})})),Object(f.a)(Object(c.a)(n),"handleUpdateCode",(function(e,t,a,i){a||le.updateFileNamesAndContent(e,n.state.codeObj.properties.language);var r=e.length<=n.state.codeTabIndex?n.state.codeTabIndex-1:n.state.codeTabIndex;-1===r&&(r=0),i&&(r=e.length-1),n.setState({codeObj:Re(Re({},n.state.codeObj),{},{properties:Re(Re({},n.state.codeObj.properties),{},{files:e})}),codeTabIndex:r},(function(){t||n.createCodeId(),n.props.handleCodeUpdate&&n.props.handleCodeUpdate(n.state.codeObj)}))})),Object(f.a)(Object(c.a)(n),"handleUpdateCodeMeta",(function(e,t){n.setState({codeObj:Re(Re({},n.state.codeObj),{},Object(f.a)({},e,t))},(function(){n.props.handleCodeUpdate&&n.props.handleCodeUpdate(n.state.codeObj)}))})),Object(f.a)(Object(c.a)(n),"handleTagsUpdate",(function(e){if(e){var t=e.split(",").map((function(e){return e.trim().toLowerCase()}));n.setState({codeObj:Re(Re({},n.state.codeObj),{},{tags:t})})}else n.setState({codeObj:Re(Re({},n.state.codeObj),{},{tags:[]})})}));var i=n.props.preFill||{},s=i.language||"java",u=i.codeObj||Re(Re({},JSON.parse(JSON.stringify(re[s]))),{},{language:s,visibility:n.props.visibility||"public"});return n.state={language:s,codeObj:u,languageSelectionModelOpen:!1,output:null,running:!1,editingModelOpen:!1,creatingCodeId:!1,isServer:!0,loginModelOpen:!1,codeTabIndex:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({isServer:!1}),this.props.preFill&&!0===this.props.preFill.listenToEvents&&window.addEventListener("message",this.handleEmbedEvent.bind(this))}},{key:"handleEmbedEvent",value:function(e){if(e.data&&e.data.eventType)if("triggerRun"===e.data.eventType)this.handleOnRunClick();else if("populateCode"===e.data.eventType)if(e.data.language&&e.data.files&&e.data.files.length>0)if(re[e.data.language]){var t=JSON.parse(JSON.stringify(re[e.data.language]));t.visibility=this.props.visibility||this.state.codeObj.visibility||"public",t.properties.files=Object(n.a)(e.data.files),this.setState({codeObj:t})}else console.log("Invalid language "+e.data.language);else console.log("language & files are mandatory for populateCode event")}},{key:"isOwnCode",value:function(){return!(!this.state.codeObj||!(this.state.codeObj.user&&this.props.loggedInUserObj&&this.props.loggedInUserObj._id&&this.state.codeObj.user._id===this.props.loggedInUserObj._id||this.state.codeObj.idToken))}},{key:"downloadFile",value:function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.isOwnCode(),i=Ue(h.a,{style:{display:"flex",flexDirection:"row"}},Ue(m.a,{indicatorColor:"primary",textColor:"primary",value:this.state.codeTabIndex,onChange:function(t,a){e.setState({codeTabIndex:a})}}," ",this.state.codeObj.properties.files.map((function(t,i){return Ue(fe,{key:t.name,label:t.name,handleEdit:re[e.state.codeObj.properties.language].properties.filesEditable?function(){var t=prompt("Please enter the new file name",e.state.codeObj.properties.files[i].name);if(t){var r=Object(n.a)(e.state.codeObj.properties.files);r[i].name=t,e.handleUpdateCode(r,a,!0)}}:null,handleDelete:re[e.state.codeObj.properties.language].properties.newFileOptions&&re[e.state.codeObj.properties.language].properties.newFileOptions.length?function(){if(confirm("Do you want to delete file?")){var i=Object(n.a)(e.state.codeObj.properties.files);i=i.filter((function(e){return e.name!==t.name})),e.handleUpdateCode(i,a)}}:null})}))),le.canHaveNewFiles(this.state.codeObj)&&Ue(Q.a,{variant:"popover",popupId:"new-file-menu"},(function(t){return Ue(ne.a.Fragment,null,Ue(v.a,Object(g.a)({"aria-label":"more-options-add-file"},Object(X.bindTrigger)(t)),Ue(A.a,{size:"small"})),Ue(O.a,Object(X.bindMenu)(t),re[e.state.codeObj.properties.language].properties.newFileOptions.map((function(i){return Ue(j.a,{key:i.helpText,onClick:function(){t.close(),console.log("adding ".concat(i.helpText));var r=Object(n.a)(e.state.codeObj.properties.files),o=le.createNewFileAndContent(e.state.codeObj.properties.files,i);o&&(r.push(Re({},o)),e.handleUpdateCode(r,a,!1,!0))}},i.helpText)}))))}))),r=Ue("div",{className:t.titleAndActions},Ue(y.a,{variant:"h1",itemProp:"headline",color:"primary",className:a?t.title:t.titleWithOptionalPadding},this.state.codeObj.title,"\xa0",a&&Ue(v.a,{"aria-label":"Edit",color:"primary",onClick:this.toggleEditingModel,className:t.smallButtonIcons},Ue(D.a,{fontSize:"small"})))),o=Ue(w.a,null,!(this.props.preFill&&!0===this.props.preFill.hideNew)&&Ue(ne.a.Fragment,null,Ue(C.a,{title:"Create a new ".concat(this.state.codeObj.properties.language.toUpperCase()," program")},Ue(x.a,{color:"primary",size:"small",onClick:function(t){return e.updateLanguage(e.state.codeObj.properties.language)}},"New")),"\xa0\xa0\xa0"),!(this.props.preFill&&!0===this.props.preFill.hideLanguageSelection)&&Ue(C.a,{title:"Click to change the language"},Ue(x.a,{size:"small",variant:"contained",color:"primary",className:"mr10",onClick:function(t){e.setState({languageSelectionModelOpen:!0})}},this.state.codeObj.properties.language," ",Ue(J.a,null))),Ue(C.a,{title:window.navigator.platform.match(/^Mac/)?"\u2318 + return":"ctrl + enter"},Ue(x.a,{size:"small",variant:"contained",color:"secondary",className:"mr10",onClick:function(t){return e.handleOnRunClick()},disabled:this.state.running},"Run  ",Ue(G.a,null))),Ue(Q.a,{variant:"popover",popupId:"more-options-popup-menu"},(function(t){return Ue(ne.a.Fragment,null,Ue(v.a,Object(g.a)({"aria-label":"more-options"},Object(X.bindTrigger)(t)),Ue(K.a,null)),Ue(O.a,Object(X.bindMenu)(t),Ue(j.a,{onClick:function(){t.close(),e.state.codeObj.properties.files.map((function(t){return e.downloadFile(t.name,t.content)}))}},"Download")))})),this.props.switchFullscreen&&Ue(C.a,{title:"Full Screen"},Ue(v.a,{"aria-label":"delete",className:t.margin,onClick:function(){return e.props.switchFullscreen()}},this.props.fullscreen?Ue(H.a,null):Ue(_.a,null))));return Ue(ne.a.Fragment,null,Ue(k.a,{smUp:!0,implementation:"css"},Ue(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},Ue(S.a,{item:!0},Ue("div",{className:t.mobileTitle},!(this.props.preFill&&!0===this.props.preFill.hideTitle)&&r)))),Ue(T.a,{variant:"outlined"},Ue(k.a,{xsDown:!0,implementation:"css"},Ue(S.a,{container:!0,justify:"space-between",alignItems:"center",className:t.editorNav},Ue(S.a,{item:!0}," ",i," "),Ue(S.a,{item:!0},!(this.props.preFill&&!0===this.props.preFill.hideTitle)&&r),Ue(S.a,{item:!0}," ",o," "))),Ue(k.a,{smUp:!0,implementation:"css"},Ue(S.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"".concat(t.editorNav," ").concat(t.editorNavMobile," ")},Ue(S.a,{item:!0,xs:12}," ",o),Ue(S.a,{item:!0,xs:12}," ",i,"   "))),Ue(S.a,{container:!0,className:this.props.fullscreen?t.availableFullscreen:void 0},Ue(S.a,{item:!0,className:this.props.fullscreen?t.availableFullscreen:void 0,xs:12,sm:this.props.preFill&&!0===this.props.preFill.hideResult?12:this.props.fullscreen?7:8},this.state.isServer&&Ue(ne.a.Fragment,null,Ue(I.a,{id:"outlined-multiline-static",multiline:!0,rows:"26",fullWidth:!0,labelWidth:0,className:t.textAreaField,defaultValue:this.state.codeObj&&this.state.codeObj.properties.files&&this.state.codeObj.properties.files.length>0?this.state.codeObj.properties.files[0].content:""}),Ue("br",null)),this.state.codeObj.properties.files.length>this.state.codeTabIndex&&Ue(Be,{onRun:function(){e.handleOnRunClick()},height:this.props.fullscreen?"100%":this.props.height||"500px",value:this.state.codeObj.properties.files[this.state.codeTabIndex].content,mode:re[this.state.codeObj.properties.language].mode,theme:this.props.loggedInUserObj.theme&&"dark"===this.props.loggedInUserObj.theme?"dark":re[this.state.codeObj.properties.language].theme,elevation:0,onChange:function(t){var i=Object(n.a)(e.state.codeObj.properties.files);i[e.state.codeTabIndex].content=t,e.handleUpdateCode(i,a)}})),!(this.props.preFill&&!0===this.props.preFill.hideResult)&&Ue(S.a,{item:!0,xs:12,sm:this.props.fullscreen?5:4,className:t.stdout},"web"===re[this.state.codeObj.properties.language].languageType&&Ue("div",{id:"resultBrowser",className:this.props.fullscreen?t.resultBrowserFullscreen:t.resultBrowser},Ue(Pe,{running:this.state.running,output:this.state.output,success:this.state.success,codeObj:this.state.codeObj,language:this.props.language})),"web"!==re[this.state.codeObj.properties.language].languageType&&Ue("div",{className:this.props.fullscreen?t.resultBrowserFullscreen:t.resultBrowser},!(this.props.preFill&&!0===this.props.preFill.hideStdin)&&Ue("div",{className:this.props.fullscreen?t.textInputFullscreen:t.textInput},Ue(k.a,{smUp:!0}," ",Ue(N.a,null)," "),Ue(F.a,{style:{paddingBottom:2},onChange:function(t){e.setState({codeObj:Re(Re({},e.state.codeObj),{},{properties:Re(Re({},e.state.codeObj.properties),{},{stdin:t.target.value})})},(function(){e.props.handleCodeUpdate&&e.props.handleCodeUpdate(e.state.codeObj)}))},value:this.state.codeObj.properties.stdin||"",label:"STDIN",placeholder:"Input for the program ( Optional )",InputProps:{style:{paddingBottom:2},classes:{notchedOutline:t.notchedOutline}},margin:"normal",variant:"outlined",multiline:!0,rows:3,rowsMax:3,fullWidth:!0,InputLabelProps:{shrink:!0}})),this.state.running&&Ue(M.a,null),Ue("div",{className:"  ".concat(this.props.fullscreen?t.textOutputFullscreen:t.textOutput,"   \n                           ").concat(!this.state.running&&this.state.codeObj.properties.result&&!0===this.state.codeObj.properties.result.success?t.resultPaperSuccess:"","  \n                           ").concat(!this.state.running&&this.state.codeObj.properties.result&&!1===this.state.codeObj.properties.result.success?t.resultPaperError:"","  ")},Ue("p",null,"Output:"),Ue("div",null,Ue("pre",null,this.state.codeObj.properties.result&&this.state.codeObj.properties.result.output||"Click on RUN button to see the output")))))),Ue("div",null,!this.props.fullscreen&&this.state.codeObj&&this.state.codeObj.updated&&Ue("div",{className:t.codeInfo},Ue(y.a,{variant:"caption",gutterBottom:!0},Ue("span",{itemProp:"datePublished",dateTime:"".concat(new Date(this.state.codeObj.updated).toISOString().split("T")[0])},"created ".concat(Object(Y.a)(new Date(this.state.codeObj.created),{max:1,suffix:!0})),"  "),this.state.codeObj.user&&this.state.codeObj.user.name&&Ue(ne.a.Fragment,null,Ue("span",null," by "),Ue(oe.Link,{route:"/users/".concat(this.state.codeObj.user._id)},Ue("a",{className:t.userLink},Ue("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},Ue("span",{itemProp:"name"},"".concat(this.state.codeObj.user.name)))))))),Ue(ke,{availableLanguages:this.props.preFill?this.props.preFill.availableLanguages:null,handleListItemClick:function(t){e.setState({language:t,languageSelectionModelOpen:!1},(function(){return e.updateLanguage(t)})),e.props.handleLanguageChange&&e.props.handleLanguageChange(t)},open:this.state.languageSelectionModelOpen,onClose:function(){e.setState({languageSelectionModelOpen:!1})}})),Ue(P.a,{open:this.state.loginModelOpen,TransitionComponent:De,onClose:function(t){return e.setState({loginModelOpen:!1})}},Ue(U.a,null,"Login & get the most of onecompiler.com"),Ue(E.a,{className:t.loginContent},Ue(Se.a,{hideMoreOptions:!0,onComplete:function(t){e.setState({loginModelOpen:!1},(function(){e.handleOnRunClick(!1,t.data.token)}))}})),Ue(R.a,null,!(this.state.language&&"web"===re[this.state.language].languageType)&&Ue(x.a,{className:"textTransformNone",size:"small",onClick:function(t){e.setState({loginModelOpen:!1},(function(){e.handleOnRunClick(!1)}))},color:"primary"},"Run without login"))),Ue(P.a,{open:this.state.editingModelOpen,TransitionComponent:De,fullWidth:!0,maxWidth:"md",onClose:function(t){return e.setState({editingModelOpen:!1})}},Ue(E.a,null,Ue("div",null,Ue(F.a,{id:"outlined-name",label:"Name",className:t.titleTextField,margin:"normal",variant:"outlined",value:this.state.codeObj.title,onChange:function(t){e.handleUpdateCodeMeta("title",t.target.value)}}),Ue("br",null),Ue(F.a,{id:"outlined-multiline-flexible",fullWidth:!0,label:"Description",multiline:!0,rows:"4",rowsMax:"20",className:t.textField,margin:"normal",variant:"outlined",value:this.state.codeObj.description||"",onChange:function(t){e.handleUpdateCodeMeta("description",t.target.value)}}),Ue("br",null),Ue(F.a,{id:"outlined-tags",label:"Tags",className:t.titleTextField,value:this.state.codeObj.tags?this.state.codeObj.tags.join(", "):"",onChange:function(t){return e.handleTagsUpdate(t.target.value)},margin:"normal",variant:"outlined"}),!this.props.visibility&&this.props.token&&Ue(ne.a.Fragment,null,Ue("br",null),Ue("br",null),Ue(ge.a,{value:this.state.codeObj.visibility||"public",onChange:function(t){return e.handleUpdateCodeMeta("visibility",t)}})))),Ue(R.a,null,Ue(x.a,{variant:"outlined",size:"small",color:"secondary",onClick:this.toggleEditingModel}," Close "),"\xa0\xa0",Ue(x.a,{variant:"outlined",size:"small",color:"primary",onClick:function(t){e.toggleEditingModel(),e.handleOnRunClick(!1)}}," Save ")))))}}]),a}(ne.a.Component);t.default=Object(ie.b)((function(e){return{loggedInUserObj:e.user,token:e.user.token}}),{})(Object(L.a)((function(e){var t;return t={resultPaperSuccess:{borderTop:"1px solid #26de81 !important"},resultPaperError:{borderTop:"1px solid ".concat(e.palette.error.main," !important")},title:{fontSize:"1.1rem",fontWeight:400},titleWithOptionalPadding:{fontSize:"1.1rem",paddingBottom:3,paddingTop:3,lineHeight:1.5,fontWeight:400},titleTextField:{width:"100%"},titleEditButtons:{textAlign:"right"},codeInfo:{paddingTop:2,paddingRight:2,float:"right"},userLink:{color:e.palette.primary.main,textDecoration:"none"},titleAndActions:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},smallButtonIcons:{padding:6},textAreaField:{margin:0,padding:"0px 0px 0px 42px",background:"white"},loginContent:{display:"flex",flexDirection:"column",alignItems:"center"},notchedOutline:{borderWidth:"1px",borderColor:"".concat(e.palette.background.default," !important")},editorNav:{background:"dark"===e.palette.type?e.palette.alternate.dark:e.palette.grey[100]},editorNavMobile:{paddingTop:e.spacing(1)}},Object(f.a)(t,e.breakpoints.up("sm"),{stdout:{borderLeft:"5px solid ".concat("dark"===e.palette.type?e.palette.alternate.dark:e.palette.grey[100])}}),Object(f.a)(t,"textOutput",{paddingLeft:e.spacing(1),overflow:"auto",maxHeight:"345px"}),Object(f.a)(t,"textOutputFullscreen",{paddingLeft:e.spacing(1),overflow:"auto",maxHeight:"calc(100vh - 155px)"}),Object(f.a)(t,"textInput",{borderBottom:"light"===e.palette.type?"1px solid rgba(0, 0, 0, 0.12)":"1px solid ".concat(e.palette.grey[800])}),Object(f.a)(t,"textInputFullscreen",{borderBottom:"light"===e.palette.type?"1px solid rgba(0, 0, 0, 0.12)":"1px solid #fff"}),Object(f.a)(t,"resultBrowser",{height:"100%"}),Object(f.a)(t,"resultBrowserFullscreen",{height:"calc(100vh - 60px)"}),Object(f.a)(t,"mobileTitle",{paddingBottom:e.spacing(1)}),Object(f.a)(t,"availableFullscreen",{height:"calc(100vh - 50px)"}),t}))(_e))},tnzV:function(e,t,a){"use strict";var n=a("wx14"),i=a("q1tI"),r=a("GGlz");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=e.breakpoint,o=void 0===a?"sm":a;return Object(r.a)()((function(e){return i.createElement(t,Object(n.a)({fullScreen:Object(r.b)(o,e.width)},e))}))}}},xSPK:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M8 5v14l11-7z"}),"PlayArrow");t.default=o},"yv+Y":function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),l=a("H2TA"),s=a("ofer"),c=r.forwardRef((function(e,t){var a=e.children,l=e.classes,c=e.className,u=e.disableTypography,d=void 0!==u&&u,p=Object(i.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(n.a)({className:Object(o.a)(l.root,c),ref:t},p),d?a:r.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(c)}}]);