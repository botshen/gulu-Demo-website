(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){},172:function(t,e,n){"use strict";n(159)},173:function(t,e,n){"use strict";n(160)},174:function(t,e,n){"use strict";n(161)},175:function(t,e,n){"use strict";n(162)},176:function(t,e,n){"use strict";n(163)},182:function(t,e,n){"use strict";n(40),n(14),n(25);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"XINSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(172),n(1)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"5fdba346",null);e.a=a.exports},183:function(t,e,n){"use strict";var i={name:"XINSider",data:function(){return{visible:!0}},methods:{}},s=(n(176),n(1)),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"sider"},[this._t("default")],2):this._e()])}),[],!1,null,"5e19524f",null);e.a=a.exports},184:function(t,e,n){"use strict";n(173);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"5ab3530c",null);e.a=s.exports},185:function(t,e,n){"use strict";n(174);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"0b24506c",null);e.a=s.exports},186:function(t,e,n){"use strict";n(175);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"x-content"},[this._t("default")],2)}),[],!1,null,"796d63c6",null);e.a=s.exports},201:function(t,e,n){},224:function(t,e,n){"use strict";n(201)},249:function(t,e,n){"use strict";n.r(e);var i=n(182),s=n(184),a=n(185),c=n(186),r=n(183),u={components:{XLayout:i.a,XHeader:s.a,XFooter:a.a,XContent:c.a,XSider:r.a}},o=(n(224),n(1)),l=Object(o.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"16px"}},[e("x-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("x-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[this._v("\n      sider\n    ")]),this._v(" "),e("x-layout",[e("x-header",{staticStyle:{height:"50px",background:"#9E91F2"}},[this._v("\n        header\n      ")]),this._v(" "),e("x-content",{staticStyle:{height:"100px",background:"#7B62D9"}},[this._v("\n        content\n      ")]),this._v(" "),e("x-footer",{staticStyle:{height:"50px",background:"#9E91F2"}},[this._v("\n        footer\n      ")])],1)],1)],1)}),[],!1,null,"2f6e8124",null);e.default=l.exports}}]);