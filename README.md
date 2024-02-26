# oscommerce E2E


### Table of contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Instalation](#instalation)
- [Run test cases](#run-test-cases)
- [Docker execution](#docker-execution)
- [Report](#report)


### Description

E2E tests using Cypress and javascript.


### Prerequisites

We need Node.js installed to execute the test. In particular, I used v19.8.1.


### Instalation

To install the framework, we must follow these steps:   

1. ``` 
    git clone https://github.com/granchetti/cypress-oscommerce.git
2. ```
    npm install


### Run test cases 

To run the test cases, you have to go to the toot of the project and execute the following commands:

```
npx cypress run || npm run test
```


### Docker execution

I create a docker-compose to crete the docker image and save the data in a volum. To execute it you have to use this command:

``` 
docker-compose up
```


### Report

To see the report, you need to open the html file in /reports folder:

``` 
open /reports/index.html
```