---
sidebar_label: 'Black Box Exporter'
sidebar_position: 1
---
# Black Box Exporter for Main Server
### The gets placed on the Monitoring server

```
#!/bin/sh
sudo wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.19.0/blackbox_exporter-0.19.0.linux-amd64.tar.gz

sudo tar xvzf blackbox_exporter-*

cd blackbox_exporter-0.19.0.linux-amd64

sudo mv blackbox_exporter /usr/local/bin

sudo mkdir -p /etc/blackbox

sudo mv blackbox.yml /etc/blackbox

sudo useradd -rs /bin/false blackbox

sudo chown blackbox:blackbox /usr/local/bin/blackbox_exporter

sudo chown -R blackbox:blackbox /etc/blackbox/*

cd /lib/systemd/system

sudo touch blackbox.service

echo '[Unit]
Description=Blackbox Exporter Service
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=blackbox
Group=blackbox
ExecStart=/usr/local/bin/blackbox_exporter \
  --config.file=/etc/blackbox/blackbox.yml \
  --web.listen-address=":9115"

Restart=always

[Install]
WantedBy=multi-user.target
' > blackbox.service

sudo systemctl enable blackbox.service

sudo systemctl start blackbox.service
```