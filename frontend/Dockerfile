FROM node:18.17-alpine

WORKDIR /usr/app
ENV NODE_ENV development
ENV PATH /usr/app/node_modules/.bin:$PATH

COPY ./package*.json ./
RUN npm ci
COPY . ./

EXPOSE 5173
CMD ["npm", "run", "dev"]
