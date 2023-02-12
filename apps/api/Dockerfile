FROM node:18-alpine AS scoper
RUN apk add --no-cache libc6-compat && \
    apk update && \
    npm add --location=global turbo

WORKDIR /app

COPY . .
RUN turbo prune --scope=api --docker

FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat && \
    apk update && \
    corepack enable pnpm

WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=scoper /app/out/json/ .
COPY --from=scoper /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm i

# Copy source files
COPY --from=scoper /app/out/full/ .
COPY turbo.json turbo.json

# Build the project
ARG TURBO_API
ENV TURBO_API=$TURBO_API

ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM

ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

ARG TURBO_REMOTE_ONLY
ENV TURBO_REMOTE_ONLY=$TURBO_REMOTE_ONLY

RUN pnpm turbo run build --filter=api...

FROM node:18-alpine AS runner
RUN corepack enable pnpm

WORKDIR /app

# Copy dependencies info
COPY --from=scoper /app/out/json/ .
COPY --from=scoper /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Copy api artifacts
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/prisma/migrations ./apps/api/prisma/migrations
COPY --from=builder /app/apps/api/prisma/schema.prisma ./apps/api/prisma/schema.prisma
COPY --from=builder /app/apps/api/prisma/seed.js ./apps/api/prisma/seed.js

# Copy contract artifacts
COPY --from=builder /app/packages/contract/dist ./packages/contract/dist

RUN pnpm i --prod --ignore-scripts --filter=api && cd apps/api && pnpm prisma generate

CMD cd apps/api && pnpm start:prod
