FROM node:11-alpine AS builder
COPY . ./org-intl
WORKDIR /org-intl
RUN npm install
RUN npm run build

FROM nginx:1-alpine
COPY --from=builder /org-intl/dist/ /usr/share/nginx/html
EXPOSE 80


# # Stage 1
# # Create image based on the official Node 8 image from dockerhub

# FROM node:12.10 as builder

# # Create a directory where our app will be placed
# RUN mkdir -p /usr/src/app

# # Change directory so that our commands run inside this new directory

# WORKDIR /usr/src/app

# # Copy dependency definitions

# COPY package*.json ./

# # Install dependecies

# RUN npm install

# # Get all the code needed to run the app

# COPY . .

# # Run the angular in product
# RUN npm run build

# # production image stage
# FROM node:12.10
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# RUN npm install -g serve@11.0.0
# COPY --from=builder /usr/src/app/dist ./
# EXPOSE 4200
# CMD ["serve", "-p", "4200", "-s", "."]

# version: '2' # specify docker-compose version

# # Define the services/containers to be run
# services:
#   ui: # name of the first service
#     hostname: localhost
#     build:
#       context: ./
#       dockerfile: dev.Dockerfile
#     ports:
#       - "4200:4200"
  