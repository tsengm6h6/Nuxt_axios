(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{232:function(t,e,r){"use strict";r.r(e);var n={props:["artistName","album","img","url","color"]},l=r(34),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"noopener noreferrer",class:"flex justify-between items-center w-full p-5 rounded shadow-lg bg-"+t.color+"-50",attrs:{target:"_blank",href:t.url}},[r("div",{staticClass:"flex-grow flex flex-col items-center justify-center px-3"},[r("h1",{staticClass:"text-lg font-bold mb-2 text-center"},[t._v(t._s(t.album))]),t._v(" "),r("p",[t._v(t._s(t.artistName))])]),t._v(" "),r("img",{staticClass:"w-24 h-24 object-cover object-center rounded",attrs:{src:t.img,alt:""}})])}),[],!1,null,null,null);e.default=component.exports},233:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(48),{components:{Card:r(232).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$axios,e.next=3,n.get("/search?term=".concat(r.id,"&entity=album&limit=10"));case 3:return l=e.sent,e.abrupt("return",{results:l.data.results});case 5:case"end":return e.stop()}}),e)})))()},computed:{albumExits:function(){return this.results.length>0}},methods:{color:function(t){return t%2==0?"green":"blue"}}}),c=r(34),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-5 flex flex-col items-center"},[t.albumExits?r("div",{staticClass:"space-y-8 w-full"},[r("h1",{staticClass:"my-8 text-center"},[t._v("\n      This are the results for "),r("span",{staticClass:"font-bold uppercase text-green-700"},[t._v(t._s(t.$route.params.id))])]),t._v(" "),t._l(t.results,(function(e,n){return r("Card",{key:e.index,attrs:{artistName:e.artistName,album:e.collectionName,img:e.artworkUrl100,url:e.collectionViewUrl,color:t.color(n)}})}))],2):r("div",[r("h1",{staticClass:"my-8"},[t._v("No Album Founded")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(232).default})}}]);