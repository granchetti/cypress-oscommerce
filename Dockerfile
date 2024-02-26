FROM cypress/included:13.6.0
WORKDIR /e2e
RUN npm install
COPY . .
CMD ["npx", "cypress", "run"]
