FROM cypress/included:13.6.0
WORKDIR /e2e
RUN npm install --save-dev cypress-mochawesome-reporter
COPY . .
CMD ["npx", "cypress", "run"]
