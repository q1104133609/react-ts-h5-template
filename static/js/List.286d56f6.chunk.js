(this["webpackJsonpreact-ts-h5-template"]=this["webpackJsonpreact-ts-h5-template"]||[]).push([[3],{119:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(175),c=n(97),r=n.n(c),o=n(99),s=n(8),u=n(0),l=n.n(u),i=function(e,t){var n=Object(u.useState)(null),c=Object(s.a)(n,2),l=c[0],i=c[1],h=Object(u.useState)(null),p=Object(s.a)(h,2),f=p[0],m=p[1];return{doAxios:Object(u.useCallback)(Object(o.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:n=t.sent,i(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),Object(a.a)(t)),error:f,reponse:l}},h=n(100),p=n.n(h),f=n(176),m=n(2),b=n(118);n(119),t.default=l.a.memo((function(){var e=Object(m.g)(),t=i((function(){return p.a.get("https://csdnxiaofu.huangb.top/iconfont.json")}),[]),n=t.reponse,a=t.doAxios;Object(u.useEffect)((function(){a()}),[a]);var c=function(e){var t=e.columnIndex,a=e.rowIndex,c=e.style,r=n.glyphs[3*a+t];return l.a.createElement("div",{key:"".concat(t,"_").concat(a),className:"icon_item column_between",style:c},l.a.createElement("i",{className:"".concat(n&&n.css_prefix_text).concat(r.font_class)}),l.a.createElement("span",null,r.name))};return l.a.createElement("div",{onClick:function(){return e.push("/other")}},n&&l.a.createElement(b.a,null,(function(e){var t=e.height,a=e.width;return l.a.createElement(f.a,{height:t,width:a,columnCount:3,columnWidth:a/3,rowCount:parseInt("".concat(n.glyphs.length/3)),rowHeight:100},c)})))}))}}]);