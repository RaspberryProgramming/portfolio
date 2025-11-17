# Build Stage
FROM node:18-alpine AS BUILD
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm ci
 
# Copy the rest of your application files
COPY . .
 
# Production Stage
FROM nginx:stable-alpine AS PRODUCTION
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
