"use strict";(self.webpackChunkchkry=self.webpackChunkchkry||[]).push([[350],{47919:function(e,t,a){a.d(t,{f:function(){return o}});var n=a(67294),r=a(71082),l="Feed-module--link--6123b",o=function(e){var t=e.edges;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((function(e){var t,a;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:l},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(r.Link,{className:l,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--51a4e",to:(null===(a=e.node.frontmatter)||void 0===a?void 0:a.slug)||e.node.fields.slug},"Read More"))})))}},69388:function(e,t,a){a.d(t,{t:function(){return m}});var n=a(67294),r=a(75900),l=a.n(r),o=a(71082),i=a(70100),d="Pagination-module--disable--7e105",m=function(e){var t,a,r=e.prevPagePath,m=e.nextPagePath,c=e.hasNextPage,s=e.hasPrevPage,u=l()("Pagination-module--previousLink--5590d",((t={})[d]=!s,t)),g=l()("Pagination-module--nextLink--532ff",((a={})[d]=!c,a));return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(o.Link,{rel:"prev",to:s?r:"/",className:u},i.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(o.Link,{rel:"next",to:c?m:"/",className:g},i.X.NEXT_PAGE)))}},91139:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var n=a(67294),r=a(47919),l=a(26327),o=a(69395),i=a(47989),d=a(69388),m=a(63588),c=a(43649),s=function(e){var t=e.pageContext,a=(0,c.$W)(),r=a.title,l=a.subtitle,i=t.group,d=t.pagination.currentPage,m=d>0?i+" - Page "+d+" - "+r:i+" - "+r;return n.createElement(o.h,{title:m,description:l})};t.default=function(e){var t=e.data,a=e.pageContext,o=a.group,c=a.pagination,s=c.prevPagePath,u=c.nextPagePath,g=c.hasPrevPage,f=c.hasNextPage,P=t.allMarkdownRemark.edges;return n.createElement(l.A,null,n.createElement(m.Y,null),n.createElement(i.T,{title:o},n.createElement(r.f,{edges:P}),n.createElement(d.t,{prevPagePath:s,nextPagePath:u,hasPrevPage:g,hasNextPage:f})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-category-template-tsx-dc2dc5e7bf0d37bdfc3e.js.map