---
sidebar_label: 'NGROK Start On Boot'
sidebar_position: 1
---
# Booting NGROK SSH On Boot

## Start by making an NGROK directory in /opt
```
sudo mkdir /opt/ngrok/
```
## Move NGROK and ngrok.yml into that folder
```
sudo mv ngrok /opt/ngrok
sudo cp ~/.ngrok2/ngrok.yml /opt/ngrok
```
## For remote SSH specifically add this to the ngrok.yml
```
authtoken: NEW-AUTH-TOKEN-GOES-HERE

tunnels:
  arbitrary_tunnel_name:
    proto: tcp
    remote_addr: 3.tcp.ngrok.io:24288
    # example forwarding to SSH, you may want to change the port number
    addr: 22

    # -------------------------
    # Additional options
    # -------------------------
    # auth: "username:password"
    # host_header: rewrite
    # inspect: true
    # bind_tls: true
```
## Make a systemd service
```
sudo nano /etc/systemd/system/ngrok.service
```
```
[Unit]
Description=ngrok
After=network.target

[Service]
ExecStart=/opt/ngrok/ngrok start --all --config /opt/ngrok/ngrok.yml
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
IgnoreSIGPIPE=true
Restart=always
RestartSec=3
Type=simple

[Install]
WantedBy=multi-user.target
```

## Enable, start and check status
```
systemctl enable ngrok.service
systemctl start ngrok.service
systemctl status ngrok.service
```