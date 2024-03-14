# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=16

################################################################################
# Building stage
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

################################################################################
# Production stage
FROM nginx:stable as nginx-stable
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 3000

# Run the application.
CMD ["nginx", "-g", "daemon off;"]
