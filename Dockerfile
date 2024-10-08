FROM node:14 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
