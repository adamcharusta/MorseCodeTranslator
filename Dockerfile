FROM nginx:1.27.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
COPY . .
EXPOSE 80