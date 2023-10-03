FROM node:20.8.0-alpine3.18 as build
WORKDIR /app
COPY . /app
RUN npm install typescript -g
RUN npm install && npm run build


FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html