(window.webpackJsonp=window.webpackJsonp||[]).push([["page-0"],{"24f8":function(t,e,c){},6597:function(t,e,c){"use strict";c("24f8")},c594:function(t,e,c){"use strict";c.r(e),c("a4d3"),c("e01a"),c("99af");var i=c("5c40"),a=c("9ff4"),r=Object(i.I)("data-v-03f2954c");Object(i.w)("data-v-03f2954c");var s={key:0,class:"pb-10"},n={class:"flex items-start mb-2"},o={class:"px-4"},b={class:"font-bold text-xl"},l={class:"ml-1 text-xs text-gray-500"},d={class:"mb-1 text-xs"},u={class:"mb-1 text-xs"},f={class:"mb-1 text-xs"},m={class:"mb-1 text-xs"},j={class:"mb-1 text-xs"},p={class:"my-2"},O={class:"my-3 border-t border-opacity-25"},v=Object(i.k)("svg",{class:"text-2xl",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{"vertical-align":"-0.125em","-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[Object(i.k)("path",{d:"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z",fill:"currentColor"})],-1);Object(i.u)();var g=r((function(t,e){return Object(i.t)(),Object(i.f)("div",null,[Object(i.k)("div",{class:["loader loader-border",{"is-active":t.isLoading}]},null,2),t.item?(Object(i.t)(),Object(i.f)("div",s,[Object(i.k)("div",n,[Object(i.k)("img",{class:"w-1/3",src:t.item.imgUrl},null,8,["src"]),Object(i.k)("div",o,[Object(i.k)("div",b,[Object(i.j)(Object(a.G)(t.item.title)+" ",1),Object(i.k)("span",l,"["+Object(a.G)(t.item.status)+"]",1)]),Object(i.k)("div",d,Object(a.G)(t.item.originName),1),Object(i.k)("div",u,"地區: "+Object(a.G)(t.item.area),1),Object(i.k)("div",f,"製作公司: "+Object(a.G)(t.item.studio),1),Object(i.k)("div",m,"類型: "+Object(a.G)(t.item.type),1),Object(i.k)("div",j,"放送日: "+Object(a.G)(t.item.dateAired),1)])]),Object(i.k)("div",p,[(Object(i.t)(!0),Object(i.f)(i.b,null,Object(i.x)(t.item.tags,(function(t,e){return Object(i.t)(),Object(i.f)("span",{key:e,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},"#"+Object(a.G)(t),1)})),128)),Object(i.k)("a",{href:t.item.officialWebsite,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",target:"_blank"},"官方網站",8,["href"])]),Object(i.k)("div",O,[(Object(i.t)(!0),Object(i.f)(i.b,null,Object(i.x)(t.item.episodeList,(function(e){return Object(i.t)(),Object(i.f)("a",{href:"https://mechakucha-api.herokuapp.com/agefans/".concat(t.id,"/").concat(e.pId,"/").concat(e.eId),key:e.id,class:"border-b border-opacity-25 p-2 flex items-center justify-between",target:"_blank"},[Object(i.k)("div",null,Object(a.G)(e.title),1),v],8,["href"])})),128))]),Object(i.k)("p",{class:"text-gray-500 text-sm leading-snug",innerHTML:t.item.description},null,8,["innerHTML"])])):Object(i.g)("",!0)])})),x=(c("96cf"),c("5530")),k=c("1da1"),y=c("a1e9"),h=c("0613"),w=c("afbc"),G=c("08ba"),L={setup:function(t,e){var c=Object(y.g)({id:w.a.currentRoute.value.params.id,item:null}),a=Object(i.e)((function(){return h.a.state.isLoading}));function r(){return(r=Object(k.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.getDetails(c.id);case 2:if((e=t.sent).success){t.next=5;break}return t.abrupt("return");case 5:c.item=e.item;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),Object(x.a)(Object(x.a)({},Object(y.n)(c)),{},{isLoading:a})}};c("6597"),L.render=g,L.__scopeId="data-v-03f2954c",e.default=L},e01a:function(t,e,c){"use strict";var i=c("23e7"),a=c("83ab"),r=c("da84"),s=c("5135"),n=c("861d"),o=c("9bf2").f,b=c("e893"),l=r.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};b(u,l);var f=u.prototype=l.prototype;f.constructor=u;var m=f.toString,j="Symbol(test)"==String(l("test")),p=/^Symbol\((.*)\)[^)]+$/;o(f,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(s(d,t))return"";var c=j?e.slice(7,-1):e.replace(p,"$1");return""===c?void 0:c}}),i({global:!0,forced:!0},{Symbol:u})}}}]);