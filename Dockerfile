FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || (echo "Build failed. Error log:" && cat .next/build-error.log && exit 1)
EXPOSE 3000
CMD ["npm", "start"]