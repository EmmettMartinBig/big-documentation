"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[439],{5613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return i},default:function(){return c}});var r=n(7462),l=n(3366),s=(n(7294),n(3905)),p=["components"],a={sidebar_label:"EC2-Server Setup",sidebar_position:1},o="EC2 basic Server setup",u={unversionedId:"AWS-EC2/EC2-Server",id:"AWS-EC2/EC2-Server",isDocsHomePage:!1,title:"EC2 basic Server setup",description:"Step 1 - Allow UFW",source:"@site/docs/AWS-EC2/EC2-Server.md",sourceDirName:"AWS-EC2",slug:"/AWS-EC2/EC2-Server",permalink:"/big-documentation/docs/AWS-EC2/EC2-Server",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/AWS-EC2/EC2-Server.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"EC2-Server Setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Windows Prometheus Installer (Server Installer)",permalink:"/big-documentation/docs/website-monitoring/windows-prometheus"},next:{title:"NGROK Start On Boot",permalink:"/big-documentation/docs/Ngrok-Start-On-Boot/localStorage"}},i=[{value:"Step 1 - Allow UFW",id:"step-1---allow-ufw",children:[]},{value:"Step 2 - NGINX Setup",id:"step-2---nginx-setup",children:[]},{value:"Step 3 - AWS Firewall",id:"step-3---aws-firewall",children:[]}],d={toc:i};function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ec2-basic-server-setup"},"EC2 basic Server setup"),(0,s.kt)("h3",{id:"step-1---allow-ufw"},"Step 1 - Allow UFW"),(0,s.kt)("p",null,"Check app list"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw app list\n")),(0,s.kt)("p",null,"Allow OpenSSH"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw allow OpenSSH\n")),(0,s.kt)("p",null,"Enable UFW"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw enable\n")),(0,s.kt)("p",null,"Check status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ufw status\n")),(0,s.kt)("h3",{id:"step-2---nginx-setup"},"Step 2 - NGINX Setup"),(0,s.kt)("p",null,"Update system"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt update\n")),(0,s.kt)("p",null,"Install NGINX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt install nginx\n")),(0,s.kt)("p",null,"Check UFW App List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw app list\n")),(0,s.kt)("p",null,"Enable NGINX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw allow 'Nginx HTTP'\n")),(0,s.kt)("p",null,"Check Status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo ufw status\n")),(0,s.kt)("p",null,"Check systemd Status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"systemctl status nginx\n")),(0,s.kt)("p",null,"Start systemd service for NGINX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo systemctl enable nginx\n")),(0,s.kt)("h3",{id:"step-3---aws-firewall"},"Step 3 - AWS Firewall"),(0,s.kt)("p",null,"Go to the AWS Firewall settings for the specific instance and add http (80)"))}c.isMDXComponent=!0}}]);