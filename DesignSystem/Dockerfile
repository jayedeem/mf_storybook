FROM node:alpine
WORKDIR /DesignSystem
COPY package.json package.lock.json* ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "storybook"]
