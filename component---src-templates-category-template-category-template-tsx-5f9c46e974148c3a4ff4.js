"use strict";(self.webpackChunkchkry=self.webpackChunkchkry||[]).push([[350],{7919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(7294),l=a(1082),r="Feed-module--link--6123b";var o=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:r},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(l.Link,{className:r,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description))})))}},9388:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(7294),l=a(5900),r=a.n(l),o=a(1082),i=a(100),c="Pagination-module--disable--7e105";var s=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:s}=e;const d=r()("Pagination-module--previousLink--5590d",{[c]:!s}),m=r()("Pagination-module--nextLink--532ff",{[c]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:s?t:"/",className:d},i.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:l?a:"/",className:m},i.X.NEXT_PAGE)))}},1139:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var n=a(7294),l=a(7919),r=a(6327),o=a(9395),i=a(7989),c=a(9388),s=a(3588),d=a(3649);const m=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,d.$W)(),{group:r,pagination:{currentPage:i}}=t,c=i>0?r+" - Page "+i+" - "+a:r+" - "+a;return n.createElement(o.h,{title:c,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{group:o,pagination:d}=a,{prevPagePath:m,nextPagePath:u,hasPrevPage:g,hasNextPage:P}=d,{edges:f}=t.allMarkdownRemark;return n.createElement(r.A,null,n.createElement(s.Y,null),n.createElement(i.T,{title:o},n.createElement(l.f,{edges:f}),n.createElement(c.t,{prevPagePath:m,nextPagePath:u,hasPrevPage:g,hasNextPage:P})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-category-template-tsx-5f9c46e974148c3a4ff4.js.map