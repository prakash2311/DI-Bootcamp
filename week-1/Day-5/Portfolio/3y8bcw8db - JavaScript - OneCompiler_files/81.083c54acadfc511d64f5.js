(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"5P2v":function(t,e,n){"use strict";n.r(e);var c=n("H+61"),i=n("UlJF"),o=n("+Css"),r=n("7LId"),u=n("VIvw"),a=n("iHvq");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(a.a)(t);if(e){var i=Object(a.a)(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return Object(u.a)(this,n)}}var l=n("q1tI"),f=l.createElement,h=function(t){Object(r.a)(n,t);var e=s(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).setRef=i.setRef.bind(Object(o.a)(i)),i}return Object(i.a)(n,[{key:"setRef",value:function(t){this.codeEl=t}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs&&window.hljs.highlightBlock(this.codeEl)}},{key:"render",value:function(){return f("pre",null,f("code",{ref:this.setRef,className:this.props.language?"language-".concat(this.props.language):"plaintext"},this.props.value))}}]),n}(l.PureComponent);h.defaultProps={language:""},e.default=h}}]);