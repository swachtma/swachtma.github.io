(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(150),i=a(4),c=a.n(i),o=a(172),s=a.n(o),u=a(174),d=a.n(u),m=a(183),p=a.n(m),h=function(e){var t=e.className,a=e.horizontal;return r.a.createElement("article",{className:"\n        "+t+" \n        "+p.a.adaptiveCard+" \n      "},r.a.createElement("div",{className:"card hoverable z-depth-2 "+(a?"horizontal":"")},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:"dog",src:"https://loremflickr.com/1280/800/labrador?q="+100*Math.random()})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},r.a.createElement(d.a,{count:1,seed:Math.floor(10001*Math.random()),sentenceLowerBound:4,sentenceUpperBound:8,paragraphLowerBound:1,paragraphUpperBound:1})),r.a.createElement("div",null,r.a.createElement(d.a,{count:1,seed:Math.floor(10001*Math.random()),sentenceLowerBound:5,sentenceUpperBound:15,paragraphLowerBound:3,paragraphUpperBound:4})))))},g=a(184),f=a.n(g),y=function(e){var t=e.gridPattern,a=e.cards;return r.a.createElement("div",{id:f.a.grid},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:f.a.cardPanel},function(e,t){return t.map(function(t,a){var n=e[0];return e.push(e.shift()),r.a.createElement(h,{key:a,horizontal:n.horizontal,className:"col l"+n.l+" m"+n.m+" s"+n.s})})}(t,a))))};y.defaultProps={gridPattern:[{l:12,m:12,s:12,horizontal:!0},{l:4,m:6,s:12},{l:4,m:6,s:12},{l:4,m:6,s:12},{l:6,m:6,s:12},{l:6,m:6,s:12}],cards:s.a.range(16)},y.propTypes={gridPattern:c.a.arrayOf(c.a.object),cards:c.a.array};var E=y,v=a(145),w=a(148),b=a(152),k=a(185),N=a.n(k),x=a(186),L=a.n(x),T=function(e){var t=e.children;return r.a.createElement("div",{id:N.a.galleryLayout},r.a.createElement("header",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:N.a.headerTitles},r.a.createElement("h1",null,r.a.createElement("img",{src:L.a,alt:"Gatsby JS Icon",width:"36",height:"36"}),"asper"),r.a.createElement("h2",null,"The BYOD publishing platform")),r.a.createElement("div",{id:N.a.headerNav},r.a.createElement("ul",{className:"left"},r.a.createElement(v.a,null)),r.a.createElement(w.a,{className:"hide-on-small-only"})))),t,r.a.createElement(b.a,null))};T.propTypes={children:c.a.node.isRequired};var q=T;t.default=function(){return r.a.createElement(q,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(E,null))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(142),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(144),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(143);t.a=function(e){return[r.a.createElement("li",{key:"home"},r.a.createElement(l.Link,{to:"/"},"Home")),r.a.createElement("li",{key:"about"},r.a.createElement(l.Link,{to:"/"},"About")),r.a.createElement("li",{key:"blog"},r.a.createElement(l.Link,{to:"/"},"Blog"))]}},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(52),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(143),i=a(147),c=a(154);t.a=function(e){var t=e.className;return r.a.createElement("ul",{className:"right "+t},r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement(i.a,{size:"lg",icon:c.e}))),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement(i.a,{size:"lg",icon:c.a}))),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement(i.a,{size:"lg",icon:c.c}))),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement(i.a,{size:"lg",icon:c.d}))),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement(i.a,{size:"lg",icon:c.b}))))}},149:function(e,t,a){e.exports={footer:"footer-module--footer--V5wV3"}},150:function(e,t,a){"use strict";var n=a(151),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(157),s=a.n(o),u=a(143);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return l.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(143),i=function(e){return[r.a.createElement("li",{key:"home"},r.a.createElement(l.Link,{className:"grey-text text-lighten-3",to:"/"},"Home")),r.a.createElement("li",{key:"linkedIn"},r.a.createElement(l.Link,{className:"grey-text text-lighten-3",to:"/"},"Linked In")),r.a.createElement("li",{key:"Twitter"},r.a.createElement(l.Link,{className:"grey-text text-lighten-3",to:"/"},"Twitter"))]},c=a(149),o=a.n(c);t.a=function(){var e=r.a.createElement("div",null,"© 2014 Copyright Text");return r.a.createElement("footer",{className:"page-footer",id:o.a.footer},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"grey-text text-lighten-3 col l6 m6 hide-on-small-only"},e),r.a.createElement("div",{className:"col l4 m4 offset-m2 offset-l2 hide-on-small-only"},r.a.createElement("ul",{className:"right"},r.a.createElement(i,null))),r.a.createElement("div",{className:"col s12 center hide-on-med-and-up"},e),r.a.createElement("div",{className:"col s12 center hide-on-med-and-up"},r.a.createElement("ul",null,r.a.createElement(i,null)))))}},183:function(e,t,a){e.exports={adaptiveCard:"card-module--adaptiveCard--2ynJ0"}},184:function(e,t,a){e.exports={grid:"grid-module--grid--2108X",cardPanel:"grid-module--cardPanel--2HYc4"}},185:function(e,t,a){e.exports={galleryLayout:"gallery_layout-module--galleryLayout--1bhpF",headerTitles:"gallery_layout-module--headerTitles--f2UxW",headerNav:"gallery_layout-module--headerNav--1wJ8O"}},186:function(e,t,a){e.exports=a.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-56814ad8264b73108813.js.map