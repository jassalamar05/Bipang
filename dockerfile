FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/ngnix/conf.d/default.conf

COPY --from=builder /app/dist /user/share/ngnix/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]