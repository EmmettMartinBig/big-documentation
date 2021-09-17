#!/bin/sh
sudo su

sudo touch /etc/prometheus/web.yml

sudo echo '
tls_server_config:
  cert_file: /etc/prometheus/fullchain.pem
  key_file: /etc/prometheus/privkey.pem
  ' > /etc/prometheus/web.yml


cd /etc/letsencrypt/live/*/
cp fullchain.pem /etc/prometheus/
cp fullchain.pem /etc/prometheus/