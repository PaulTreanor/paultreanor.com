(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{334:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("aaa6041c",content,!0,{sourceMap:!1})},337:function(t,e,o){t.exports=o.p+"img/me.63be150.png"},338:function(t,e,o){"use strict";o(334)},339:function(t,e,o){var n=o(47)((function(i){return i[1]}));n.push([t.i,'.blurb[data-v-db36ec54]{font-family:"Open Sans"}.emailCopy[data-v-db36ec54]{cursor:pointer}.emailCopy:hover .tooltip[data-v-db36ec54]{display:block}.tooltip[data-v-db36ec54]{display:none;position:absolute;z-index:1000}img[data-v-db36ec54]{display:block;margin-top:20px;max-width:100px}',""]),n.locals={},t.exports=n},354:function(t,e,o){"use strict";o.r(e);o(26),o(149);var n=o(9),r=(o(56),o(14),o(33),o(57),o(75),{data:function(){return{search:"",tags:{}}},computed:{filteredArticles:function(){var t=this,e=[];return this.search?(this.articles.forEach((function(article){article.tags&&article.tags.forEach((function(o){o.toLowerCase().includes(t.search.toLowerCase())&&(e.includes(article)||e.push(article))})),article.title.toLowerCase().includes(t.search.toLowerCase())&&(e.includes(article)||e.push(article))})),e):this.articles}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,t.params,e.next=3,o("blog").only(["title","short","img","slug","author","createdAt","tags"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{tagClickHandler:function(t){this.search=t},copyEmailToClipboard:function(){navigator.clipboard.writeText("treanorpaul9@gmail.com")},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=(o(338),o(32)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-4 md:mx-20 lg:mx-40 font-open-sans"},[e("main",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"blurb my-11"},[e("img",{staticClass:"mt-5 mb-7",attrs:{src:o(337),alt:""}}),t._v(" "),e("h2",{staticClass:"text-4xl font-open-sans font-bold py-4"},[t._v("Hi, I'm Paul 🐮")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"text-lg font-open-sans"},[t._v("Feel free to get in touch!")]),t._v(" "),e("div",{staticClass:"row pt-4 text-2xl"},[e("a",{attrs:{href:"https://github.com/PaulTreanor"}},[e("ion-icon",{attrs:{name:"logo-github"}})],1),t._v(" "),e("a",{attrs:{href:"https://paultreanor.com/rss.xml"}},[e("ion-icon",{attrs:{name:"logo-rss"}})],1),t._v(" "),e("a",{staticClass:"emailCopy",on:{click:t.copyEmailToClipboard}},[e("ion-icon",{attrs:{name:"mail"}}),t._v(" "),e("span",{staticClass:"tooltip font-open-sans text-sm italic"},[t._v("copy email to clipboard")])],1)])])])]),t._v(" "),e("div",{staticClass:"home-page"},[e("h2",{staticClass:"text-4xl font-open-sans font-bold py-4"},[t._v("📝 Latest Notes")]),t._v(" "),e("div",{staticClass:"articles pb-40"},[e("div",{staticClass:"search-box py-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"bg-slate-50 border border-sky-300 text-slate-900 rounded-lg active:border-sky-400 hover:border-sky-400 focus:border-sky-400 block p-2.5 w-96 max-w-full",attrs:{type:"text",placeholder:"Search for tags or post titles 🔎"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t._l(t.filteredArticles,(function(article){return e("div",{key:article.slug,staticClass:"my-7 max-w-2xl"},[e("div",{staticClass:"border-slate-300 border-b-2 border-solid pb-5 no-underline"},[e("div",{staticClass:"w-fit font-open-sans"},[e("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[e("h5",{staticClass:"font-open-sans text-xl text-slate-900 hover:bg-sky-200 active:focus:bg-sky-400 pb-2 w-fit no-underline"},[t._v(t._s(article.title))])]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[e("p",{staticClass:"font-open-sans text-slate-600 hover:bg-sky-200 active:focus:bg-sky-400 w-fit no-underline pr-4"},[t._v(t._s(t.formatDate(article.createdAt)))])]),t._v(" "),t._l(article.tags,(function(o){return e("div",{key:o,staticClass:"bg-sky-100 text-sky-800 text-sm font-open-sans font-semibold rounded-full px-3 py-1 mr-2 mb-2",on:{click:function(e){return t.tagClickHandler(o)}}},[t._v("\n                  "+t._s(o)+"\n                ")])}))],2)],1)])])}))],2)])])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-lg font-open-sans"},[t._v("I'm a fullstack developer making serverless things at "),e("a",{attrs:{href:"https://www.fourtheorem.com/"}},[t._v("fourTheorem")]),t._v(". This website is where I keep my notes and thoughts.")])}],!1,null,"db36ec54",null);e.default=component.exports}}]);