---
sidebar_label: 'EC2-Server Setup'
sidebar_position: 1
---
# EC2 basic Server setup 

### Step 1 - Allow UFW
Check app list
```
sudo ufw app list
```

Allow OpenSSH
```
sudo ufw allow OpenSSH
```

Enable UFW
```
sudo ufw enable
```

Check status
```
ufw status
```

### Step 2 - NGINX Setup

Update system
```
sudo apt update
```

Install NGINX
```
sudo apt install nginx
```

Check UFW App List
```
sudo ufw app list
```

Enable NGINX
```
sudo ufw allow 'Nginx HTTP'
```

Check Status
```
sudo ufw status
```

Check systemd Status
```
systemctl status nginx
```

Start systemd service for NGINX
```
sudo systemctl enable nginx
```

### Step 3 - AWS Firewall
Go to the AWS Firewall settings for the specific instance and add http (80)