"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>I,default:()=>j,frontMatter:()=>E,metadata:()=>x,toc:()=>O});var r=n(7462),a=n(7294),o=n(3905),i=n(6010),l=n(2466),s=n(6550),u=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:r}),[c,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(N.tabItem,r),hidden:n},t)}const E={sidebar_position:1,title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird."},I="Getting Started",x={unversionedId:"index",id:"index",title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird."},sidebar:"tutorialSidebar",next:{title:"\u2601\ufe0f Code Push",permalink:"/code-push"}},C={},O=[{value:"Sign Up \u270d\ufe0f",id:"sign-up-\ufe0f",level:2},{value:"Install \ud83d\udce6",id:"install-",level:2},{value:"Log In \ud83d\udd11",id:"log-in-",level:2},{value:"Connect on Discord \ud83d\udcac",id:"connect-on-discord-",level:2}],P={toc:O},D="wrapper";function j(e){let{components:t,...n}=e;return(0,o.kt)(D,(0,r.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"This guide will walk you through ",(0,o.kt)("a",{parentName:"p",href:"#sign-up-"},"creating an account"),", ",(0,o.kt)("a",{parentName:"p",href:"#install-"},"installing Shorebird"),", and ",(0,o.kt)("a",{parentName:"p",href:"#log-in-"},"logging in"),"."),(0,o.kt)("h2",{id:"sign-up-\ufe0f"},"Sign Up \u270d\ufe0f"),(0,o.kt)("p",null,"To create an account, head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.shorebird.dev"},"Shorebird Console")," and authenticate with your Google account."),(0,o.kt)("h2",{id:"install-"},"Install \ud83d\udce6"),(0,o.kt)("p",null,"To install the Shorebird command line interface (CLI):"),(0,o.kt)(S,{mdxType:"Tabs"},(0,o.kt)(T,{value:"maclinux",label:"Mac/Linux",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open a terminal and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | bash\n"))),(0,o.kt)(T,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},"Open a PowerShell terminal and run:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy RemoteSigned -scope CurrentUser # Needed to execute remote scripts\niwr -UseBasicParsing 'https://raw.githubusercontent.com/shorebirdtech/install/main/install.ps1'|iex\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Installing Shorebird CLI requires ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),".")),(0,o.kt)("p",null,"This installs ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin")," and adds it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". It\nalso installs a copy of Flutter and Dart inside\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin/cache/flutter"),". The copy of Flutter is slightly modified to\nadd Shorebird code push and is not intended to be added to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". You can\ncontinue to use the versions of Flutter and Dart you already have installed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The total installation is about 300mb.")),(0,o.kt)("p",null,"Once the installation has completed, ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird")," should be available in your\nterminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ shorebird\nThe shorebird command-line tool\n\nUsage: shorebird <command> [arguments]\n\nGlobal options:\n-h, --help            Print this usage information.\n-v, --version         Print the current version.\n    --[no-]verbose    Noisy logging, including all shell commands executed.\n\nAvailable commands:\n  account        Manage your Shorebird account.\n  apps           Manage your Shorebird apps.\n  build          Build a new release of your application.\n  cache          Manage the Shorebird cache.\n  doctor         Show information about the installed tooling.\n  init           Initialize Shorebird.\n  login          Login as a new Shorebird user.\n  logout         Logout of the current Shorebird user\n  patch          Publish new patches for a specific release to Shorebird.\n  release        Builds and submits your app to Shorebird.\n  run            Run the Flutter application.\n  subscription   Manage your Shorebird subscription.\n  upgrade        Upgrade your copy of Shorebird.\n\nRun "shorebird help <command>" for more information about a command.\n')),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird doctor")," to ensure things are set-up correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird doctor\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ shorebird doctor\n\nShorebird v0.0.8\nShorebird Engine \u2022 revision d470ae25d21f583abe128f7b838476afd5e45bde\n\n\u2713 Shorebird is up-to-date (0.7s)\n\u2713 Flutter install is correct (0.1s)\n\u2713 AndroidManifest.xml files contain INTERNET permission (26ms)\n\nNo issues detected!\n")),(0,o.kt)("h2",{id:"log-in-"},"Log In \ud83d\udd11"),(0,o.kt)("p",null,"You can login using the ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird login")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird login\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ shorebird login\nThe Shorebird CLI needs your authorization to manage apps, releases, and patches\non your behalf.\n\nIn a browser, visit this URL to log in:\n\nhttps://accounts.google.com/o/oauth2/v2/auth...\n\nWaiting for your authorization...\n\n\ud83c\udf89 Welcome to Shorebird! You are now logged in as <email>.\n\n\ud83d\udd11 Credentials are stored in ./path/to/credentials.json.\n\ud83d\udeaa To logout use: "shorebird logout".\n')),(0,o.kt)("p",null,"That's it \ud83c\udf89"),(0,o.kt)("p",null,"You now have a Shorebird account, have installed Shorebird CLI on your machine, and are ready to start using Shorebird."),(0,o.kt)("h2",{id:"connect-on-discord-"},"Connect on Discord \ud83d\udcac"),(0,o.kt)("p",null,"Shorebird has an active Discord where we're happy to help you:\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"https://discord.gg/shorebird")),(0,o.kt)("p",null,"We also offer a private support channel for paying customers. We don't yet have\nan automated way to add you to the channel, so please message a member of our\nteam on Discord and we'll happily add you to the customer support channel.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/308"},"https://github.com/shorebirdtech/shorebird/issues/308")))}j.isMDXComponent=!0}}]);