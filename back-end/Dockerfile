FROM node:16.14-alpine
WORKDIR /back-end
COPY ["package.json", "package-lock.json*", "./" ]
RUN npm install
COPY . /back-end
CMD ["npm", "start"]