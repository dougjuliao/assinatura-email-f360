(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],f=0,u=[];f<s.length;f++)i=s[f],r[i]&&u.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"signature"},[a("v-content",{attrs:{"fill-height":""}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:"","pa-2":""}},[a("v-card",{staticClass:"elevation-1"},[a("v-card-text",[a("v-form",[a("v-text-field",{ref:"start",attrs:{tabindex:"1",label:"Nome",autocomplete:"new-name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{ref:"start",attrs:{tabindex:"1",label:"E-mail",autocomplete:"new-email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{tabindex:"2",label:"Função",autocomplete:"new-title",type:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{attrs:{tabindex:"5",label:"Telefone #1",autocomplete:"new-phone1",type:"text"},model:{value:t.phone1,callback:function(e){t.phone1=e},expression:"phone1"}}),a("v-text-field",{attrs:{tabindex:"6",label:"Telefone #2",autocomplete:"new-phone2",type:"text"},model:{value:t.phone2,callback:function(e){t.phone2=e},expression:"phone2"}})],1)],1),a("v-card-actions",{staticClass:"d-flex"},[a("v-btn",{ref:"copy",staticClass:"js-copy",attrs:{color:"primary","data-clipboard-target":"#source"},nativeOn:{click:function(t){t.preventDefault()}}},[t._v("\n                Copiar\n              ")]),a("v-btn",{ref:"copySrc",staticClass:"js-copy-src",attrs:{color:"secondary"}},[t._v("\n                Copiar HTML\n              ")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",md8:"","pa-2":""}},[a("v-card",{staticClass:"elevation-1",attrs:{height:"100%"}},[a("div",{staticClass:"signature__source"},[a("div",{ref:"sourceWrapper"},[a("table",{staticStyle:{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px","font-weight":"normal",color:"#37474f","text-align":"left","line-height":"20px"},attrs:{id:"source",cellpadding:"0",cellspacing:"0"}},[a("tbody",[a("tr",[a("td",{attrs:{valign:"top"}},[a("a",{attrs:{tabindex:"-1",target:"_blank",href:"https://www.financas360.com.br/"}},[a("img",{staticStyle:{width:"120px","margin-top":"0","margin-right":"10px"},attrs:{alt:"Logo - finanças 360",title:"Logo - finanças 360",border:"0",src:"https://lh6.googleusercontent.com/proxy/POr10ABfBkb4qkYs8XgJnyy3IzRK4Jme5hlEsGFiqn7LZObP0Huyin6f7vCtjEk7UX-oY2vEXw=s800#https://i.imgur.com/0nr54h6.png"}})])]),a("td",{staticStyle:{"font-family":"arial,sans-serif"},attrs:{padding:"0"}},[a("table",{staticStyle:{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px","font-weight":"normal",color:"#37474f","text-align":"left","line-height":"20px"},attrs:{border:"0"}},[a("tbody",[a("tr",[a("td",{staticStyle:{font:"normal 100% Arial,Helvetica,sans-serif"}},[a("span",{staticStyle:{"font-weight":"bold","font-size":"13px",color:"#404756"}},[t._v(t._s(t.name||"Luiz Saouda"))])])]),a("tr",[a("td",{staticStyle:{font:"normal 100% Arial,Helvetica,sans-serif"}},[a("span",{staticStyle:{color:"#9a9a9a"}},[t._v(t._s(t.title||"CTO"))])])]),a("tr",[a("td",{staticStyle:{font:"normal 100% Arial,Helvetica,sans-serif"}},[a("a",{staticStyle:{color:"#9a9a9a"},attrs:{tabindex:"-1",href:t.tel1}},[t._v("\n                                  "+t._s(t.phone1||"+55 (11) 2091-6178")+"\n                                ")]),t._v(" \n                                "),t.phone2?a("span",{staticStyle:{color:"#999"}},[t._v("| ")]):t._e(),a("a",{staticStyle:{color:"#9a9a9a"},attrs:{tabindex:"-1",href:t.tel2}},[t._v(t._s(t.phone2))])])]),a("tr",[a("td",{staticStyle:{"text-decoration":"none",display:"grid",font:"normal 100% Arial,Helvetica,sans-serif"}},[a("a",{staticStyle:{color:"#2f79c5","text-decoration":"none"},attrs:{href:"mailto:luiz@financas360.com.br"}},[t._v(t._s(t.email||"luiz@financas360.com.br"))])])]),a("tr",[a("td",{staticStyle:{"text-decoration":"none",display:"grid",font:"normal 100% Arial,Helvetica,sans-serif"}},[a("a",{staticStyle:{color:"#2f79c5","text-decoration":"none"},attrs:{target:"_blank",href:"https://www.financas360.com.br"}},[t._v("https://www.financas360.com.br")])])]),a("tr",[a("td",{staticStyle:{font:"normal 100% Arial,Helvetica,sans-serif"}},[a("hr",{staticStyle:{margin:"8px 0"}})])]),a("tr",[a("td",{staticStyle:{font:"normal 100% Arial,Helvetica,sans-serif"}},[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/company/finan%C3%A7as-360/"}},[a("img",{staticStyle:{width:"20px"},attrs:{src:"https://lh4.googleusercontent.com/proxy/Nb57bhqqPVG12hbQEplZ9USKWNSF0D0c5k3hnwXJxgIsCi1ghvRF4ch8PvW2Rd7swMRdx3CbXw=s800#https://i.imgur.com/AzWbcNp.png",alt:"Linkedin"}})]),t._v(" \n                                "),a("a",{attrs:{target:"_blank",href:"https://pt-br.facebook.com/financas360/"}},[a("img",{staticStyle:{width:"20px"},attrs:{src:"https://lh5.googleusercontent.com/proxy/GNq77rNSkFgh2rWt_uxwSag8BmZ0e-zNJjwor7J1VB3c6pQc-KZVmxhU14_EpPNrojm3_sIVoQ=s800#https://i.imgur.com/otRrhlh.png",alt:"Facebook"}})]),t._v(" \n                                "),a("a",{attrs:{target:"_blank",href:"https://blog.financas360.com.br/"}},[a("img",{staticStyle:{width:"20px"},attrs:{src:"https://lh4.googleusercontent.com/proxy/BHdkzWfWNWLjf0ZR7_kVLuteFxRcMk_2yEiMxq7C3bcq2sTqAYYMVrlN-bVnn_Sk8FFzllMklA=s800#https://i.imgur.com/3ozJJGx.png",alt:"Blog"}})])])])])])])])])])])])])],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:1e3,color:"success"},model:{value:t.feedback,callback:function(e){t.feedback=e},expression:"feedback"}},[t._v("\n    Copiado!\n  ")])],1)},o=[],i=(a("a481"),a("b311")),s=a.n(i),l={data:function(){return{feedback:!1,name:"",title:"",email:"",address:"",website:"https://www.financas360.com.br/",phone1:"+55 (11) 2091-6178",phone2:""}},computed:{tel1:function(){return"tel:".concat(this.phone1.replace(/ /g,"").replace(/\D/g,""))},tel2:function(){return"tel:".concat(this.phone2.replace(/ /g,"").replace(/\D/g,""))}},mounted:function(){var t=this;this.$refs.start.focus();var e=new s.a(".js-copy"),a=new s.a(".js-copy-src",{text:function(){return t.$refs.sourceWrapper.innerHTML}});e.on("success",function(){t.feedback=!0}),a.on("success",function(){t.feedback=!0})},props:{source:String}},c=l,p=(a("5c0b"),a("2877")),f=a("6544"),u=a.n(f),d=a("7496"),b=a("8336"),h=a("b0af"),m=a("99d9"),v=a("a523"),g=a("549c"),y=a("0e8f"),x=a("4bd4"),w=a("a722"),_=a("2db4"),k=a("2677"),S=Object(p["a"])(c,r,o,!1,null,null,null);S.options.__file="App.vue";var C=S.exports;u()(S,{VApp:d["a"],VBtn:b["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:v["a"],VContent:g["a"],VFlex:y["a"],VForm:x["a"],VLayout:w["a"],VSnackbar:_["a"],VTextField:k["a"]});var V=a("bb71");a("da64");n["a"].use(V["a"],{iconfont:"md",theme:{primary:"#30a0e7",secondary:"#665ef1"}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("6879"),r=a.n(n);r.a},6879:function(t,e,a){}});
//# sourceMappingURL=app.c447bc7b.js.map