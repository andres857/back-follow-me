# Etapa de desarrollo 
FROM node:lts-iron AS dev

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn global add @nestjs/cli
RUN yarn install

COPY . .
CMD ["npm", "run", "start:dev"]

# Etapa de compilación
# FROM node:lts-iron AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install  

# COPY . .

# RUN npm run build

# # Etapa final de producción
# FROM node:lts-iron AS prod

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY --from=build /app/dist ./dist

# CMD ["node", "dist/main"]