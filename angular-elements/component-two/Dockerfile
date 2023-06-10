# Use an official Nginx runtime as a parent image
FROM nginx:stable

ARG CACHEBUST
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

RUN echo "$CACHEBUST"
COPY dist/component-two.css /usr/share/nginx/html/
COPY dist/component-two.js /usr/share/nginx/html/