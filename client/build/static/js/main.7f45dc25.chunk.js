(this["webpackJsonpph-timeline"]=this["webpackJsonpph-timeline"]||[]).push([[0],{48:function(e,n,t){},77:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);t(2);var r,a,c,i,s=t(62),l=t.n(s),o=(t(77),t(48),t(11)),d=t(41),p=new d.ApolloClient({cache:new d.InMemoryCache,link:new d.HttpLink({uri:"https://api.producthunt.com/v2/api/graphql"})}),j=t(27),b=t(90),h=t(70),m=t.n(h),u=t(42),x=t(10),O=(u.a.h1(r||(r=Object(j.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]))),u.a.section(a||(a=Object(j.a)(["\n  padding: 4em;\n  background: papayawhip;\n"]))),u.a.button(c||(c=Object(j.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"])),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"}))),v=function(e){return Object(x.jsx)("div",{className:"card",style:{width:"100%",marginTop:"10px"},children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:e.post.title}),Object(x.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.post.title}),Object(x.jsx)("p",{className:"card-text",children:e.course.title}),Object(x.jsx)(O,{children:"test"}),Object(x.jsx)("a",{href:e.post.url,className:"card-link"})]})})};console.log(2);var f=function(){return Object(x.jsx)(b.a,{query:m()(i||(i=Object(j.a)(["\n        {\n            Post {\n                title\n            }\n        }\n    "]))),children:function(e){var n=e.loading,t=e.error,r=e.data;return n?Object(x.jsx)("p",{children:"Loading ..."}):t?Object(x.jsx)("p",{children:"Error :("}):r.allPosts.map((function(e){return Object(x.jsx)(v,{post:e})}))}})};console.log(1);var g=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:["ls",Object(x.jsx)("p",{children:"Product Hunt"})]}),Object(x.jsx)("main",{children:Object(x.jsx)(o.a,{client:p,children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(x.jsx)("a",{className:"navbar-brand",href:"#",children:"React and GraphQL - Sample Application"})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{})})]})})})]})};t(86).polyfill(),t(87),l.a.render(Object(x.jsx)(g,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.7f45dc25.chunk.js.map