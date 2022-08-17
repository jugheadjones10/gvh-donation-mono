# syntax=docker/dockerfile:1
# Super convoluted dockerfile I hacked together. Not even sure if this is the way to do it. The recommended method is running
# redis in a separate container, and if I want to deploy to fly.io that means having one app for my node.js backend and another
# app for redis. But this redis DB is only ever going to store a few values, so giving it its own app is massively overkill.

FROM golang AS downloader

RUN curl https://zyedidia.github.io/eget.sh | sh && \
    mv eget /usr/local/bin && \
    eget DarthSim/overmind && \
    mv overmind /usr/local/bin

FROM node:16.16.0
ENV NODE_ENV=production

COPY --from=downloader /usr/local/bin /usr/local/bin

RUN apt-get update && \
    apt-get install -y \
        bash \
        tmux \
        curl

RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    cd .. && \
    rm -r redis-stable

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .
CMD [ "overmind", "start" ]
