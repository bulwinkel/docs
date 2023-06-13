"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4,title:"\ud83c\udf93 Concepts",description:"Concepts used in Shorebird's code push product"},o="Code Push Concepts",p={unversionedId:"concepts",id:"concepts",title:"\ud83c\udf93 Concepts",description:"Concepts used in Shorebird's code push product",source:"@site/docs/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/concepts",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/concepts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83c\udf93 Concepts",description:"Concepts used in Shorebird's code push product"},sidebar:"tutorialSidebar",previous:{title:"\u2795 Code Push Add to App",permalink:"/guides/code_push_add_to_app"},next:{title:"\ud83d\udc77 Status",permalink:"/status"}},l={},s=[{value:"Glossary",id:"glossary",level:2},{value:"Application",id:"application",level:3},{value:"Release",id:"release",level:3},{value:"Patch",id:"patch",level:3},{value:"Artifact",id:"artifact",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-push-concepts"},"Code Push Concepts"),(0,r.kt)("p",null,"An explanation of the concepts used in Shorebird's code push product."),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("p",null,"An application is what is created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter create [app_name]")," and corresponds to a listing in the App Store or Play Store."),(0,r.kt)("p",null,"Each application has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," that is assigned when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird init"),". You can find your application's id in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird.yaml")," file at the root of your project."),(0,r.kt)("p",null,"An application can have zero or more ",(0,r.kt)("a",{parentName:"p",href:"#release"},"releases"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Applications that use build flavors will have a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," for each flavor.")),(0,r.kt)("h3",{id:"release"},"Release"),(0,r.kt)("p",null,"A release is a specific version of an ",(0,r.kt)("a",{parentName:"p",href:"#application"},"application"),", identified by a version and build number (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),"). Although code push works for apps distributed outside of the App Store and Play Store, a release most often corresponds with a specific version of your app that is published to the App Store or Play Store."),(0,r.kt)("p",null,"A release can have zero or more ",(0,r.kt)("a",{parentName:"p",href:"#patch"},"patches")," applied to it."),(0,r.kt)("p",null,"Releases are created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird release [platform]"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"aar"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," (coming soon)."),(0,r.kt)("h3",{id:"patch"},"Patch"),(0,r.kt)("p",null,"A patch is a change to a specific ",(0,r.kt)("a",{parentName:"p",href:"#release"},"release"),", applied as an over-the-air update. For example, a patch could be a bug fix or a new feature. Multiple patches can be published for a given release, although only one patch can be active at a time. Patches are identified by their associated release version and a patch number, which is an auto-incrementing integer."),(0,r.kt)("p",null,"When your application starts, it checks for available patches and applies the latest one. This patch will be visible the next time your application launches."),(0,r.kt)("p",null,"Patches are created by running ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird patch [platform]"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"aar"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," (coming soon)."),(0,r.kt)("h3",{id:"artifact"},"Artifact"),(0,r.kt)("p",null,"An artifact is the output of a build or patch operation. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shorebird release android")," generates and uploads several architecture-specific ",(0,r.kt)("inlineCode",{parentName:"li"},"libapp.so")," files and an Android archive (.aab) file. These are ",(0,r.kt)("strong",{parentName:"li"},"release artifacts"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shorebird patch android")," generates and uploads diff files that capture differences between your Dart code at patch time and the code in the associated release. These are ",(0,r.kt)("strong",{parentName:"li"},"patch artifacts"),".")))}u.isMDXComponent=!0}}]);