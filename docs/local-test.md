# Local Test Environment

## Kratos

```bash
git clone https://github.com/ory/kratos.git
cd kratos
git checkout v1.0.0
docker-compose -f quickstart.yml up --build --force-recreate
```

## App

```bash
cd kratos-selfservice-svelte-node
yarn run dev -- --host --port 3000
```

## Nginx

`/etc/nginx/sites-available/kratos.conf`

```conf
# ------------------------------------------------------------------------------
# kratos.mydomain.corp
# ------------------------------------------------------------------------------
server {
  listen 443 ssl;
  listen [::]:443 ssl;

  include snippets/snakeoil.conf;
  server_name kratos.mydomain.corp;

  location / {
    proxy_pass http://172.18.18.1:4433;
    proxy_http_version 1.1;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    tcp_nodelay on;
  }
}

# ------------------------------------------------------------------------------
# app.mydomain.corp
# ------------------------------------------------------------------------------
server {
  listen 443 ssl;
  listen [::]:443 ssl;

  include snippets/snakeoil.conf;
  server_name app.mydomain.corp;

  location / {
    proxy_pass http://172.18.18.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    tcp_nodelay on;
  }
}

server {
  listen 3000 ssl;
  listen [::]:3000 ssl;

  include snippets/snakeoil.conf;
  server_name app.mydomain.corp;

  location / {
    proxy_pass http://172.18.18.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    tcp_nodelay on;
  }
}
```

```bash
ln -s ../sites-available/kratos.conf /etc/nginx/sites-enabled/
systemctl restart nginx
```
