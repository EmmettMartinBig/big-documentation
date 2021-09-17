"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[143],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6980:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_label:"NGROK Start On Boot",sidebar_position:1},l="Booting NGROK SSH On Boot",s={unversionedId:"Ngrok-Start-On-Boot/localStorage",id:"Ngrok-Start-On-Boot/localStorage",isDocsHomePage:!1,title:"Booting NGROK SSH On Boot",description:"Start by making an NGROK directory in /opt",source:"@site/docs/Ngrok-Start-On-Boot/localStorage.md",sourceDirName:"Ngrok-Start-On-Boot",slug:"/Ngrok-Start-On-Boot/localStorage",permalink:"/docs/Ngrok-Start-On-Boot/localStorage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Ngrok-Start-On-Boot/localStorage.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"NGROK Start On Boot",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EC2-Server Setup",permalink:"/docs/AWS-EC2/localStorage"},next:{title:"localStorage (For Headless CMS)",permalink:"/docs/brightsign/localStorage"}},d=[{value:"Start by making an NGROK directory in /opt",id:"start-by-making-an-ngrok-directory-in-opt",children:[]},{value:"Move NGROK and ngrok.yml into that folder",id:"move-ngrok-and-ngrokyml-into-that-folder",children:[]},{value:"For remote SSH specifically add this to the ngrok.yml",id:"for-remote-ssh-specifically-add-this-to-the-ngrokyml",children:[]},{value:"Make a systemd service",id:"make-a-systemd-service",children:[]},{value:"Enable, start and check status",id:"enable-start-and-check-status",children:[]}],p={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"booting-ngrok-ssh-on-boot"},"Booting NGROK SSH On Boot"),(0,a.kt)("h2",{id:"start-by-making-an-ngrok-directory-in-opt"},"Start by making an NGROK directory in /opt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo mkdir /opt/ngrok/\n")),(0,a.kt)("h2",{id:"move-ngrok-and-ngrokyml-into-that-folder"},"Move NGROK and ngrok.yml into that folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo mv ngrok /opt/ngrok\nsudo cp ~/.ngrok2/ngrok.yml /opt/ngrok\n")),(0,a.kt)("h2",{id:"for-remote-ssh-specifically-add-this-to-the-ngrokyml"},"For remote SSH specifically add this to the ngrok.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'authtoken: NEW-AUTH-TOKEN-GOES-HERE\n\ntunnels:\n  arbitrary_tunnel_name:\n    proto: tcp\n    remote_addr: 3.tcp.ngrok.io:24288\n    # example forwarding to SSH, you may want to change the port number\n    addr: 22\n\n    # -------------------------\n    # Additional options\n    # -------------------------\n    # auth: "username:password"\n    # host_header: rewrite\n    # inspect: true\n    # bind_tls: true\n')),(0,a.kt)("h2",{id:"make-a-systemd-service"},"Make a systemd service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/systemd/system/ngrok.service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=ngrok\nAfter=network.target\n\n[Service]\nExecStart=/opt/ngrok/ngrok start --all --config /opt/ngrok/ngrok.yml\nExecReload=/bin/kill -HUP $MAINPID\nKillMode=process\nIgnoreSIGPIPE=true\nRestart=always\nRestartSec=3\nType=simple\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("h2",{id:"enable-start-and-check-status"},"Enable, start and check status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl enable ngrok.service\nsystemctl start ngrok.service\nsystemctl status ngrok.service\n")))}u.isMDXComponent=!0}}]);