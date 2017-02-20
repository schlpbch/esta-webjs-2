# Dockerfile for ESTA WebJS
FROM kd-cloud/plattform-nginx-base:1.0.0
MAINTAINER Reto Lehmann <reto.lehmann@sbb.ch>

# Download sources from Repository
RUN wget "http://repo.sbb.ch/service/local/artifact/maven/redirect?r=mirror&g=ch.sbb.esta.webjs&a=esta-webjs-2-starterkit&v=$VERSION&p=tar.gz" -O esta-webjs-2-starterkit.tar.gz

# Extract and move to nginx html folder
RUN tar -xzf esta-webjs-2-starterkit.tar.gz
RUN mv build/* /usr/share/nginx/html

CMD nginx
