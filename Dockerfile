FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn run build

EXPOSE 3000
CMD ["yarn","run", "production"]
