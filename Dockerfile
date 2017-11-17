FROM nginx:alpine
COPY ./source/dist/ /usr/src/app/
WORKDIR /usr/src/app/
COPY breezyboats.conf /etc/nginx/conf.d/breezyboats.conf