(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(t,i,e){var s=e(381);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(142).default)("16f2c04e",s,!0,{})},380:function(t,i,e){"use strict";var s=e(326);e.n(s).a},381:function(t,i,e){(t.exports=e(141)(!1)).push([t.i,".list-item-btn-hover[data-v-49077032] {\n  display: none;\n}\n.list-item:hover .list-item-btn-hover[data-v-49077032] {\n  display: inline-block;\n}\n.list-item:hover .list-item-icon[data-v-49077032] {\n  display: none;\n}\n",""])},514:function(t,i,e){"use strict";e.r(i);var s=e(3),n=e(7),l=e(4),o=e(0),a=e.n(o),r={data:()=>({lists:[],action:"",nightmode:!1,processed:!1}),created(){this.init()},methods:{__:s.a,formatTime:l.c,friendlyTitle(t){if(t.title)return t.title;const i=t.tabs.map(t=>t.title);let e="";for(;e.length<60&&0!==i.length;)e+=i.shift()+", ";return e=": "+e.slice(0,-2).substr(0,57)+"..."},async switchNightMode(){const t=await a.a.runtime.getBackgroundPage();"nightmode"in t&&(this.nightmode=t.nightmode||!1)},async init(){this.switchNightMode();const t=await n.a.getLists();this.lists=t;const i=await n.a.getOptions();this.action=i.popupItemClickAction,this.processed=!0},clicked(t){["restore","restore-new-window"].includes(this.action)&&Object(l.h)({restoreList:{index:t,newWindow:"restore-new-window"===this.action}})},storeInto(t){Object(l.h)({storeInto:{index:t}})}}},c=(e(380),e(244)),d=e(311),h=e.n(d),v=e(511),p=e(376),u=e(341),m=e(377),g=e(342),f=e(343),_=e(344),w=e(345),y=e(501),b=e(328),x=Object(c.a)(r,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{style:{width:"360px"},attrs:{dark:t.nightmode}},[t.lists.length>0?e("v-list",{attrs:{dense:""}},[t._l(t.lists,function(i,s){return[e("v-list-tile",{key:s,staticClass:"list-item",attrs:{ripple:"",color:i.color},on:{click:function(i){return t.clicked(s)}}},[e("v-list-tile-content",[e("v-list-tile-title",[e("strong",[t._v("["+t._s(i.tabs.length)+"]")]),t._v(" "+t._s(t.friendlyTitle(i)))]),t._v(" "),e("v-list-tile-sub-title",[t._v(t._s(t.formatTime(i.time)))])],1),t._v(" "),e("v-list-tile-action",[e("div",{staticClass:"text-xs-right"},[e("v-btn",{staticClass:"list-item-btn-hover",attrs:{small:"",flat:"",icon:"",title:"store select tab into this list"},on:{click:function(i){return i.stopPropagation(),t.storeInto(s)}}},[e("v-icon",{style:{fontSize:"14px"}},[t._v("add")])],1),t._v(" "),e("v-icon",{directives:[{name:"show",rawName:"v-show",value:i.pinned,expression:"list.pinned"}],staticClass:"list-item-icon",style:{fontSize:"14px"},attrs:{color:"blue"}},[t._v("fas fa-thumbtack")])],1)])],1),t._v(" "),s+1<t.lists.length?e("v-divider"):t._e()]})],2):t._e(),t._v(" "),t.processed?t._e():e("v-layout",{style:{minHeight:"100px"},attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1),t._v(" "),t.processed&&0===t.lists.length?e("v-layout",{style:{minHeight:"100px"},attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[e("h3",{staticClass:"display-2 grey--text",domProps:{textContent:t._s(t.__("ui_no_list"))}})]):t._e()],1)},[],!1,null,"49077032",null);i.default=x.exports;h()(x,{VApp:v.a,VBtn:p.a,VDivider:u.a,VIcon:m.a,VLayout:g.a,VList:f.a,VListTile:_.a,VListTileAction:w.a,VListTileContent:y.a,VListTileSubTitle:y.b,VListTileTitle:y.c,VProgressCircular:b.a})}}]);
//# sourceMappingURL=popup.js.map