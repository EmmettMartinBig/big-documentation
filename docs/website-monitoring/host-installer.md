---
sidebar_label: 'Ubuntu Prometheus Installer (Server Installer)'
sidebar_position: 2
---

## Ubuntu Prometheus Install

Step 1: Log into desired server you wish to monitor

Step 2 : Copy code snippit, and on server:

```
vi prom.sh
```
Step 3: Paste from code snippit
Then:
```
#!/bin/sh
echo "Creating Users for Prometheus"

echo
sudo useradd --no-create-home --shell /bin/false prometheus
sudo useradd --no-create-home --shell /bin/false node_exporter
echo

echo "Creating new folders for Prometheus and Node Exporter in /etc/ and /var/lib"
echo
sudo mkdir /etc/prometheus
sudo mkdir /var/lib/prometheus
sudo chown -R prometheus:prometheus /var/lib/prometheus/
echo

echo "Set ownership for prometheus"
sudo chown -R prometheus:prometheus /etc/prometheus/


echo "Downloading Prometheus"
echo
cd ~
curl -LO https://github.com/prometheus/prometheus/releases/download/v2.29.1/prometheus-2.29.1.linux-amd64.tar.gz
echo

echo "Unpacking Prometheus"
echo
sudo tar xvf prometheus-*.tar.gz
echo

echo "Copy binaries to /usr/local/bin"
echo
sudo cp prometheus-*/prometheus /usr/local/bin/
sudo cp prometheus-*/promtool /usr/local/bin/
echo

echo "Set ownership to the user and group in step 1"
echo
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool
echo

echo "Copy consoles and console_libraries to /etc/prometheus"
echo
sudo cp -r prometheus-*/consoles /etc/prometheus
sudo cp -r prometheus-*/console_libraries /etc/prometheus
echo

echo "Set the user and group ownership on the directories to the prometheus user. Using the -R flag will ensure that ownership is set on the files inside the directory as well."
echo
sudo chown -R prometheus:prometheus /etc/prometheus/consoles
sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
echo

echo "Removing leftover Files"
echo
sudo rm -rf prometheus-*.tar.gz prometheus-*.linux-amd64
echo

echo "Configuring prometheus.yml"
echo
sudo echo 'global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9090']
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']' > /etc/prometheus/prometheus.yml
echo

echo "Setting ownership of prometheus.yml to user prometheus"
sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
echo

echo "Making the prometheus service"
sudo touch /etc/systemd/system/prometheus.service
echo

echo "Appending properies to the service"
sudo echo '[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file /etc/prometheus/prometheus.yml \
    --storage.tsdb.path /var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries

[Install]
WantedBy=multi-user.target' > /etc/systemd/system/prometheus.service
echo

echo "To use the new service, reload systemd"
sudo systemctl daemon-reload
echo

echo "We enable the service so that it will be loaded automatically during boot"
sudo systemctl enable prometheus
echo

echo "Start Prometheus on boot"
sudo systemctl start prometheus
echo

echo "SECOND HALF - INSTALLING AND CONFIG OF NODE EXPORTER"
echo

echo "Download Node Exporter"
echo
cd ~
curl -LO https://github.com/prometheus/node_exporter/releases/download/v1.2.2/node_exporter-1.2.2.linux-amd64.tar.gz
echo

echo "Unpacking NE"
echo
sudo tar xvf node_exporter-*.tar.gz
echo

echo " copying to /usr/local/bin"
sudo cp node_exporter-*/node_exporter /usr/local/bin
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
echo

echo "Removing leftovers"
sudo rm -rf node_exporter-*.tar.gz node_exporter-*.linux-amd64
echo


echo " Running the exporter service"
sudo echo '
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target' > /etc/systemd/system/node_exporter.service
echo

echo "Reload systemd"
echo
sudo systemctl daemon-reload
echo

echo "Starting NE"
sudo systemctl start node_exporter
echo

echo "Checking Status"
echo
sudo systemctl status node_exporter
echo

echo "Enable NE to start on boot"
echo
sudo systemctl enable node_exporter
echo

echo "Restart Prometheus"
sudo systemctl restart prometheus
echo

echo "Status check of Prometheus"
sudo systemctl status prometheus
echo
```
To start the install:

```
sudo bash ./prom.sh
```
## OPTIONAL STEP SSL (VERY RECOMMENED THOUGH) 
```
sudo su
```

Step 4
Create new file called ssl-prom.sh
```
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
```
