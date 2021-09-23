"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[290],{8669:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return b},toc:function(){return l},default:function(){return d}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],a={sidebar_label:"Black Box Exporter",sidebar_position:1},c="Black Box Exporter for Main Server",b={unversionedId:"website-monitoring/blackbox-exporter",id:"website-monitoring/blackbox-exporter",isDocsHomePage:!1,title:"Black Box Exporter for Main Server",description:"The gets placed on the Monitoring server",source:"@site/docs/website-monitoring/blackbox-exporter.md",sourceDirName:"website-monitoring",slug:"/website-monitoring/blackbox-exporter",permalink:"/big-documentation/docs/website-monitoring/blackbox-exporter",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/website-monitoring/blackbox-exporter.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Black Box Exporter",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docs Intro",permalink:"/big-documentation/docs/intro"},next:{title:"Ubuntu Prometheus Installer (Server Installer)",permalink:"/big-documentation/docs/website-monitoring/host-installer"}},l=[{value:"The gets placed on the Monitoring server",id:"the-gets-placed-on-the-monitoring-server",children:[]}],x={toc:l};function d(e){var o=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},x,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"black-box-exporter-for-main-server"},"Black Box Exporter for Main Server"),(0,i.kt)("h3",{id:"the-gets-placed-on-the-monitoring-server"},"The gets placed on the Monitoring server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/sh\nsudo wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.19.0/blackbox_exporter-0.19.0.linux-amd64.tar.gz\n\nsudo tar xvzf blackbox_exporter-*\n\ncd blackbox_exporter-0.19.0.linux-amd64\n\nsudo mv blackbox_exporter /usr/local/bin\n\nsudo mkdir -p /etc/blackbox\n\nsudo mv blackbox.yml /etc/blackbox\n\nsudo useradd -rs /bin/false blackbox\n\nsudo chown blackbox:blackbox /usr/local/bin/blackbox_exporter\n\nsudo chown -R blackbox:blackbox /etc/blackbox/*\n\ncd /lib/systemd/system\n\nsudo touch blackbox.service\n\necho '[Unit]\nDescription=Blackbox Exporter Service\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nType=simple\nUser=blackbox\nGroup=blackbox\nExecStart=/usr/local/bin/blackbox_exporter \\\n  --config.file=/etc/blackbox/blackbox.yml \\\n  --web.listen-address=\":9115\"\n\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n' > blackbox.service\n\nsudo systemctl enable blackbox.service\n\nsudo systemctl start blackbox.service\n")))}d.isMDXComponent=!0}}]);