"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(439),c=e(791),a=e(689),u=e(207),o=e(184);n.default=function(){var t=(0,a.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),i=e[0],s=e[1];return(0,c.useEffect)((function(){t&&(0,u.tx)("/movie",t).then((function(t){s(t.results)})).catch(u.ry)}),[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Reviews:"}),0!==i.length?(0,o.jsx)("ul",{children:i.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Author:"})," ",e]}),(0,o.jsx)("p",{children:r})]},n)}))}):(0,o.jsx)("p",{children:"Sorry! We don't have any reviews for this movie"})]})}},207:function(t,n,e){e.d(n,{M1:function(){return d},TP:function(){return f},V0:function(){return x},XT:function(){return s},ry:function(){return k},tx:function(){return v}});var r=e(861),c=e(757),a=e.n(c),u=e(243),o="https://api.themoviedb.org/3",i="0c47dfbd6e6c78608dc1f0b39b4dd72d";function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o).concat(n,"?api_key=").concat(i),t.next=3,u.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o).concat(n,"/").concat(e,"?api_key=").concat(i),t.next=3,u.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o).concat(n,"/").concat(e,"/credits?api_key=").concat(i),t.next=3,u.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o).concat(n,"/").concat(e,"/reviews?api_key=").concat(i),t.next=3,u.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o).concat(n,"?api_key=").concat(i,"&query=").concat(e),t.next=3,u.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){alert("Oops! Something went wrong! Try reloading the page or make another choice!")}}}]);
//# sourceMappingURL=186.9b38c91e.chunk.js.map