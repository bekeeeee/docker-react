FROM node:alpine as builder 
# phase builder

WORKDIR "/app"

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# CMD ["npm","run","build"]

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html