# oscommerce E2E


### Table of contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Instalation](#instalation)
- [Run test cases](#run-test-cases)
- [Docker execution](#docker-execution)
- [Report](#report)
- [References](#references)



### Description

E2E tests using Cypress and Javascript.


### Prerequisites

You need Node.js installed to execute the test. In particular, I used v20.9.0.


### Instalation

To install the project, you must clone the repository in your computer:

``` 
git clone https://github.com/granchetti/cypress-oscommerce.git
```
Then, you have go to the root of the the repository and execute the following command:
```
npm install
```  


### Run test cases 

To run the test cases, you have to execute the following commands:

```
npx cypress run || npm run test
```


### Docker execution

To execute the docker-compose file, you have to use the follwing command:

``` 
docker-compose up
```


### Report

To see the report, you need to open the html file in /reports folder:

``` 
open cypress/reports/index.html
```

### References

https://www.cypress.io/