#DEPS
FROM node:16.15-alpine3.15 AS deps

EXPOSE 3300
WORKDIR /app

COPY --chown=node:node ./package*.json /app/

RUN npm ci --no-audit && npm cache clean --force

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json ./
COPY --chown=node:node ./.mocharc.json ./

#BUILD
FROM node:16.15-alpine3.15 as production
WORKDIR /app

COPY --chown=node:node --from=deps /app/src ./src
COPY --chown=node:node --from=deps /app/package.json ./
COPY --chown=node:node --from=deps /app/package-lock.json ./
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node --from=deps /app/tsconfig.json ./
COPY --chown=node:node --from=deps /app/.npmrc ./

RUN npm run build

#CLEANUP
RUN npm prune --production
RUN rm -rf /app/.npmrc
USER node

CMD ["node", "./dist/src/index"]
