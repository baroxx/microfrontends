# Use an official Nginx runtime as a parent image
FROM nginx:stable

ARG CACHEBUST
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

RUN echo "$CACHEBUST"
COPY dist/header-component.css /usr/share/nginx/html/
COPY dist/header-component.js /usr/share/nginx/html/