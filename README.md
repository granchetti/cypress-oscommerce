# oscommerce E2E


### Table of contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run test cases](#run-test-cases)
- [Docker execution](#docker-execution)
- [Report](#report)
- [References](#references)



### Description

E2E tests using Cypress and Javascript.


### Prerequisites

You need Node.js installed to execute the tests. In particular, I used v20.9.0.


### Installation

To install the project, you must clone the repository on your computer:

``` 
git clone https://github.com/granchetti/cypress-oscommerce.git
```
Then, you have go to the root of the the repository and execute the following command:
```
npm install
```  


### Run test cases 

To run the test cases, you can execute the following command:

```
npx cypress run
```
Alternatively, you can run tests using the npm script:

```
npm run test
```


### Docker execution

To execute the docker-compose file, you just need to use the follwing command:

``` 
docker-compose up --build
```


### Report

To view the report, you need to open the HTML file in the /reports folder:

``` 
open cypress/reports/index.html
```

### References

For more information, visit the [Cypress documentation](https://www.cypress.io/docs).
