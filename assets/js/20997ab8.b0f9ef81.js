"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[640],{3905:function(e,n,o){o.d(n,{Zo:function(){return p},kt:function(){return m}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=t.createContext({}),l=function(e){var n=t.useContext(u),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(o),m=r,d=h["".concat(u,".").concat(m)]||h[m]||a[m]||s;return o?t.createElement(d,c(c({ref:n},p),{},{components:o})):t.createElement(d,c({ref:n},p))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,c=new Array(s);c[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<s;l++)c[l]=o[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4943:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var t=o(7462),r=o(3366),s=(o(7294),o(3905)),c=["components"],i={sidebar_label:"Prometheus Installer (Server Installer)",sidebar_position:2},u=void 0,l={unversionedId:"website-monitoring/host-installer",id:"website-monitoring/host-installer",isDocsHomePage:!1,title:"host-installer",description:"Step 1: Log into desired server you wish to monitor",source:"@site/docs/website-monitoring/host-installer.md",sourceDirName:"website-monitoring",slug:"/website-monitoring/host-installer",permalink:"/docs/website-monitoring/host-installer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/website-monitoring/host-installer.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Prometheus Installer (Server Installer)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prometheus Walkthrough from Digital Ocean",permalink:"/docs/website-monitoring/website-monitoring"},next:{title:"EC2-Server Setup",permalink:"/docs/AWS-EC2/localStorage"}},p=[{value:"OPTIONAL STEP SSL (VERY RECOMMENED THOUGH)",id:"optional-step-ssl-very-recommened-though",children:[]}],a={toc:p};function h(e){var n=e.components,o=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,t.Z)({},a,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Step 1: Log into desired server you wish to monitor"),(0,s.kt)("p",null,"Step 2 : Copy code snippit, and on server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vi prom.sh\n")),(0,s.kt)("p",null,"Step 3: Paste from code snippit\nThen:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo bash ./prom.sh\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'#!/bin/sh\necho "Creating Users for Prometheus"\n\necho\nsudo useradd --no-create-home --shell /bin/false prometheus\nsudo useradd --no-create-home --shell /bin/false node_exporter\necho\n\necho "Creating new folders for Prometheus and Node Exporter in /etc/ and /var/lib"\necho\nsudo mkdir /etc/prometheus\nsudo mkdir /var/lib/prometheus\nsudo chown -R prometheus:prometheus /var/lib/prometheus/\necho\n\necho "Set ownership for prometheus"\nsudo chown -R prometheus:prometheus /etc/prometheus/\n\n\necho "Downloading Prometheus"\necho\ncd ~\ncurl -LO https://github.com/prometheus/prometheus/releases/download/v2.29.1/prometheus-2.29.1.linux-amd64.tar.gz\necho\n\necho "Unpacking Prometheus"\necho\nsudo tar xvf prometheus-*.tar.gz\necho\n\necho "Copy binaries to /usr/local/bin"\necho\nsudo cp prometheus-*/prometheus /usr/local/bin/\nsudo cp prometheus-*/promtool /usr/local/bin/\necho\n\necho "Set ownership to the user and group in step 1"\necho\nsudo chown prometheus:prometheus /usr/local/bin/prometheus\nsudo chown prometheus:prometheus /usr/local/bin/promtool\necho\n\necho "Copy consoles and console_libraries to /etc/prometheus"\necho\nsudo cp -r prometheus-*/consoles /etc/prometheus\nsudo cp -r prometheus-*/console_libraries /etc/prometheus\necho\n\necho "Set the user and group ownership on the directories to the prometheus user. Using the -R flag will ensure that ownership is set on the files inside the directory as well."\necho\nsudo chown -R prometheus:prometheus /etc/prometheus/consoles\nsudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\necho\n\necho "Removing leftover Files"\necho\nsudo rm -rf prometheus-*.tar.gz prometheus-*.linux-amd64\necho\n\necho "Configuring prometheus.yml"\necho\nsudo echo \'global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: \'prometheus\'\n    scrape_interval: 5s\n    static_configs:\n      - targets: [\'localhost:9090\']\n  - job_name: \'node_exporter\'\n    scrape_interval: 5s\n    static_configs:\n      - targets: [\'localhost:9100\']\' > /etc/prometheus/prometheus.yml\necho\n\necho "Setting ownership of prometheus.yml to user prometheus"\nsudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\necho\n\necho "Making the prometheus service"\nsudo touch /etc/systemd/system/prometheus.service\necho\n\necho "Appending properies to the service"\nsudo echo \'[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n\n[Install]\nWantedBy=multi-user.target\' > /etc/systemd/system/prometheus.service\necho\n\necho "To use the new service, reload systemd"\nsudo systemctl daemon-reload\necho\n\necho "We enable the service so that it will be loaded automatically during boot"\nsudo systemctl enable prometheus\necho\n\necho "Start Prometheus on boot"\nsudo systemctl start prometheus\necho\n\necho "SECOND HALF - INSTALLING AND CONFIG OF NODE EXPORTER"\necho\n\necho "Download Node Exporter"\necho\ncd ~\ncurl -LO https://github.com/prometheus/node_exporter/releases/download/v1.2.2/node_exporter-1.2.2.linux-amd64.tar.gz\necho\n\necho "Unpacking NE"\necho\nsudo tar xvf node_exporter-*.tar.gz\necho\n\necho " copying to /usr/local/bin"\nsudo cp node_exporter-*/node_exporter /usr/local/bin\nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\necho\n\necho "Removing leftovers"\nsudo rm -rf node_exporter-*.tar.gz node_exporter-*.linux-amd64\necho\n\n\necho " Running the exporter service"\nsudo echo \'\n[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=node_exporter\nGroup=node_exporter\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\' > /etc/systemd/system/node_exporter.service\necho\n\necho "Reload systemd"\necho\nsudo systemctl daemon-reload\necho\n\necho "Starting NE"\nsudo systemctl start node_exporter\necho\n\necho "Checking Status"\necho\nsudo systemctl status node_exporter\necho\n\necho "Enable NE to start on boot"\necho\nsudo systemctl enable node_exporter\necho\n\necho "Restart Prometheus"\nsudo systemctl restart prometheus\necho\n\necho "Status check of Prometheus"\nsudo systemctl status prometheus\necho\n')),(0,s.kt)("h2",{id:"optional-step-ssl-very-recommened-though"},"OPTIONAL STEP SSL (VERY RECOMMENED THOUGH)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo su\n")),(0,s.kt)("p",null,"Step 4\nCreate new file called ssl-prom.sh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"#!/bin/sh\nsudo su\n\nsudo touch /etc/prometheus/web.yml\n\nsudo echo '\ntls_server_config:\n  cert_file: /etc/prometheus/fullchain.pem\n  key_file: /etc/prometheus/privkey.pem\n  ' > /etc/prometheus/web.yml\n\n\ncd /etc/letsencrypt/live/*/\ncp fullchain.pem /etc/prometheus/\ncp fullchain.pem /etc/prometheus/\n")))}h.isMDXComponent=!0}}]);