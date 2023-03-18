"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[13],{13:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,c,i,o,s,u=r(439),l=r(87),p=r(689),d=r(791),f=r(214),x=r(168),h=r(444),v=h.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  column-gap: 10px;\n"]))),m=h.ZP.div(a||(a=(0,x.Z)(["\n  width: 500px;\n"]))),g=h.ZP.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 25px;\n  margin-bottom: 25px;\n"]))),b=h.ZP.li(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n"]))),j=r(184),k=function(e){var n=e.movie,r=n.poster_path,t=n.genres,a=n.vote_count,c=n.original_title,i=n.overview,o=n.release_date,s=t&&t.map((function(e){return e.name})).join(","),u=a/100;return(0,j.jsxs)(v,{children:[(0,j.jsx)(m,{children:(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:c})}),(0,j.jsxs)(g,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)("h1",{children:c}),(0,j.jsx)("p",{children:o})]}),(0,j.jsx)(b,{children:(0,j.jsxs)("p",{children:["User score: ",u.toFixed(2),"%"]})}),(0,j.jsxs)(b,{children:[(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:i})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:s})]})]})]})},w=h.ZP.ul(o||(o=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),Z=(0,h.ZP)(l.rU)(s||(s=(0,x.Z)(["\n  display: inline-block;\n  padding: 5px;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  background: black;\n  border-radius: 5px;\n  margin-bottom: 15px;\n"]))),y=function(){var e,n,r=(0,d.useState)({}),t=(0,u.Z)(r,2),a=t[0],c=t[1],i=(0,p.UO)().movieId,o=null!==(e=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,d.useEffect)((function(){var e=new AbortController;return(0,f.Pg)(i,e).then((function(e){return e&&c(e)})),function(){return e.abort()}}),[i]),(0,j.jsxs)("section",{children:[(0,j.jsx)(Z,{to:o,children:"Go back"}),(0,j.jsx)(k,{movie:a}),(0,j.jsx)("h4",{children:"Additional information"}),(0,j.jsxs)(w,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"cast",state:{from:o},children:"Casts"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"reviews",state:{from:o},children:"Reviews"})})]}),(0,j.jsx)(d.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(p.j3,{})})]})}},214:function(e,n,r){r.d(n,{Df:function(){return s},Pg:function(){return l},Ph:function(){return u},TP:function(){return p}});var t=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="6dbb7affd9e1114a59f95efe62ebacfd",s=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",r="".concat("trending/movie/day","?api_key=").concat(o),e.prev=2,e.next=5,i.Z.get(r,{signal:n.signal});case 5:return t=e.sent,e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code){e.next=13;break}return e.abrupt("return");case 13:console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"search/movie",t="".concat("search/movie","?api_key=").concat(o,"&query=").concat(n),e.prev=2,e.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:if(e.prev=9,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code){e.next=13;break}return e.abrupt("return");case 13:console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"?api_key=").concat(o),e.prev=1,e.next=4,i.Z.get(t,{signal:r.signal});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:if(e.prev=8,e.t0=e.catch(1),"ERR_CANCELED"!==e.t0.code){e.next=12;break}return e.abrupt("return");case 12:console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n,r,t){var a,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/movie/".concat(n,"/").concat(r),s="".concat(a,"?api_key=").concat(o),e.prev=2,e.next=5,i.Z.get(s,{signal:t.signal});case 5:return u=e.sent,e.abrupt("return",u.data);case 9:if(e.prev=9,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code){e.next=13;break}return e.abrupt("return");case 13:console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n,r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.07894077.chunk.js.map