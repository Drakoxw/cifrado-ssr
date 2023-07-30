FROM node:18 as build-step

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g npm@9.6.7

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run prerender ---prod

####

FROM nginx:1.23.4-alpine

COPY my_nginx.conf /etc/nginx/nginx.conf

COPY --from=build-step /app/dist/cifrado-ssr/server /usr/share/nginx/html
COPY --from=build-step /app/dist/cifrado-ssr/browser /usr/share/nginx/html
