webpackJsonp([14],{"69UQ":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("3nlj"),s=(r("Hj6f"),r("d4Oi")),i=r("9rMa"),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o={data:function(){return{mainarea:!1,slidename:"slide-go"}},components:{Headersec:a.a,Ordertab:s.a},computed:n({},Object(i.b)(["this.$store.state.ordercur"])),mounted:function(){this.mainarea=!0,this.$refs.noback.isBack=!1,this.setOrdercur(3),this.$store.state.ordercur<this.$store.state.ordertab?this.slidename="slide-back":this.slidename="slide-go",this.setOrdertab(3)},methods:n({onSwipeLeft:function(){this.$router.push("./waitreceive")},onSwipeRight:function(){this.$router.push("./waitpay")}},Object(i.c)({setOrdercur:"SET_ORDERCUR",setOrdertab:"SET_ORDERTAB"}))},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page orderpage"},[a("v-touch",{on:{swipeleft:function(t){e.onSwipeLeft()},swiperight:function(t){e.onSwipeRight()}}},[a("headersec",{ref:"noback",attrs:{tabname:"我的订单"}}),e._v(" "),a("ordertab",{attrs:{urlRouter:e.$route.path}}),e._v(" "),a("transition",{attrs:{name:e.slidename}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"ordercontainer"},[a("img",{attrs:{src:r("2Rdd"),alt:""}}),e._v(" "),a("p",[e._v("待发货页面")])])])],1)],1)},staticRenderFns:[]},d=r("8AGX")(o,c,!1,null,null,null);t.default=d.exports}});