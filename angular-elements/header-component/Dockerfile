# Use an official Nginx runtime as a parent image
FROM nginx:stable

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

COPY dist/header-component.js /usr/share/nginx/html/