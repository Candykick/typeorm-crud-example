# DB root PW : kakao96
# DB api PW : api!kaka00

# Step 1 : ts -> js compile
## base image for Step 1 : Node 10
FROM node:10 AS builder
WORKDIR /app
## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY . .
## Nest.js project build
RUN npm install
RUN npm run build

ENV NODE_ENV .env

# Step 2 : 가벼운 node alpine image로 compile된 application을 실행하기 위한 과정
## base image for Step 2 : Node 10-alpine(light weight)
FROM node:10-alpine
WORKDIR /app
# Step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./
## application 실행
CMD ["npm", "run", "start:prod"]
