#---- base ----

FROM node:16-slim AS base
WORKDIR /usr/src/app
RUN apt-get update -y && apt-get install -y python3 build-essential

#---- build ----

FROM base as build
COPY . ./

ARG TARGET_ENV

RUN npm run build:$TARGET_ENV
RUN npm install --production

#---- Release ----
FROM base AS release

ARG TARGET_ENV
ENV ENV=$TARGET_ENV

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]

